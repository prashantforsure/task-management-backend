
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prisma.js';

const register = async (req, res) => {
const { email , passowrd } = req.body;
const hashedpassword = bcrypt.hash(passowrd, 10);

try{
const user = prisma.user.create({
    data: {
        email,
        password: hashedpassword
    }
})
res.status(201).json({
    message : "you have successfully created the account"
})
}
catch (err){
    res.status(400).json({
        message: "something went wrong, please try again"
    })
}
}

const login = async (req,res) => {
    const {email, passowrd} = req.body
    try{
        const user = await prisma.user.findFirst({
            where: {
email
            }
        })
        if(!user || !( await bcrypt.compare(password, user.password))){
            res.status(201).json({
message: "wrong credentails"
            }
            )
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
          });
      
          res.json({ token });
    }
    catch(error){
        res.status(400).json({
            message: "something went wrong, please try again"
        })
    }
}
export { register, login };
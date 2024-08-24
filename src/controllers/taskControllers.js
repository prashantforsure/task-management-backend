import prisma from '../prisma.js';

const createTask = async (req, res) => {
    const { title, description, dueDate } = req.body;
try{
    const task = prisma.task.create({
        data: {
            title,
            description,
            dueDate,
            userId
        }
    }) 
res.status(201).json(task);
}
    catch(error){
res.status(400).json({
    message: "something went wrong"
})
    }
}

const getTasks = async (req, res) => {
    const userId = req.user.userId;
    
try {
    const tasks = await prisma.task.findMany({
        where: {
            userId
        }
    })
    res.status(200).json(tasks)
}
catch(error){
    res.status(400).json({
        message: "can't get the tasks"
    })
}
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title , description, dueDate, status } = req.body;

    try{
    const updatetasks = await prisma.task.updateMany({
        where: { id: parseInt(id), userId },
        data: {
            title,
            description,
            status,
        dueDate: new Date(dueDate),
        }
    })
    if (!task.count) {
        return res.status(404).json({ error: 'Task not found' });
      }
    res.status(200).json({
        message: "the task has been updated", updatetasks
    }
    )
    }
    catch(error){
        res.status(400).json({
            message: "something went wrong, task has not been updated"
        })
    }
}

const deleteTask = async (req, res) => {
    const { id }  = req.params;

    try{
        const deletetasks = await prisma.task.delete({
            where: {
                id: parseInt(id), userId
            },
            
        })
        if (!task.count) {
            return res.status(404).json({ error: 'Task not found' });
          }
          res.status(200).json({
            message: "the task has been updated", deletetasks
        }
        )
    }
    catch(error){
        res.status(400).json({
            message: "something went wrong, task has not been deleted"
        })
    }
}

export { createTask, getTasks, updateTask, deleteTask };
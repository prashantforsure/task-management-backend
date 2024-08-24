import express from "express";
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/taskControllers";
import { authMiddleware } from "../middleware.js/authMiddleware";


const router = express.Router();

router.post('/tasks', authMiddleware, createTask);
router.get('/tasks', authMiddleware, getTasks);
router.put('/tasks/:id', authMiddleware, updateTask);
router.delete('/tasks/:id', authMiddleware, deleteTask);

export default router;
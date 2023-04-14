import { Router } from "express";
import usersRouter from "./users/users.router.js"
import tasksRouter from "./tasks/tasks.router.js"

const router = Router()

router.use("/users",usersRouter)
router.use("/tasks",tasksRouter)

export default router;
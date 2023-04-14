import { Router } from "express";
import { TasksController } from "../../controllers/tasks.controller.js";

const router = Router()

router.get("/", TasksController.getAll)

router.get("/:taskId", TasksController.getById)

router.post("/", TasksController.create)



export default router;
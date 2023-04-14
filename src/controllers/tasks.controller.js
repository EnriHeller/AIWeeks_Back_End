import { TasksService } from "../services/tasks.service.js"

export class TasksController {

    static async getAll(req, res, next){
        const response = await TasksService.getAll()
        try {
            res.status(200).json({
                success: true,
                payload: response
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
        
    }

    static async getById(req, res, next){
        const {taskId} = req.params
        const response =  await TasksService.getById(taskId)
        try {
            
            return res.json({
                success: true,
                payload: response
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }

    static async create(req, res, next){
        const taskPayload = req.body;
        try {
            const response = await TasksService.create(taskPayload)
            return res.status(201).json({
                success: true,
                payload: response
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }

}
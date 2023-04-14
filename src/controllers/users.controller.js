import { UsersService } from "../services/users.service.js"

export class UsersController {

    static async getAll(req, res, next){
        const response = await UsersService.getAll()
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
        const {userId} = req.params
        const response =  await UsersService.getById(userId)
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
        const userPayload = req.body;
        const response = await UsersService.create(userPayload)
        try {
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
import TasksDao  from "../models/daos/tasks.dao.js";
import generateResponse from "../utils/openai.js";

export class TasksService {
    static async getAll (){
        return await TasksDao.getAll()
    }

    static async getById(id){
        if(!id || isNaN(id)){
            throw new Error("ID not valid")
        }
        const task = await TasksDao.getById(+id)

        if(!task){
            throw new Error("Task not found")
        }

        return task
    }

    static async create(taskPayload){

        const {date} = taskPayload
        const tasks = await this.getAll()

        if(!date ||!date.time || !date.days || !date.part_day){

            if(tasks.length === 0 ){
                throw new Error("You need a first complete task")
            }

            const completeTask = await generateResponse(tasks, taskPayload)
            const daoResponse = await TasksDao.create(completeTask)
            return daoResponse
        }

        return await TasksDao.create(taskPayload)

    }
}
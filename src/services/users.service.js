import UsersDao  from "../models/daos/users.dao.js";

export class UsersService {
    static async getAll (){
        return await UsersDao.getAll()
    }

    static async getById(id){
        if(!id || isNaN(id)){
            throw new Error("ID not valid")
        }
        const user = await UsersDao.getById(+id)

        if(!user){
            throw new Error("User not found")
        }

        return user
    }

    static async create(userPayload){
        if(!userPayload.name || !userPayload.lastname){
            throw new Error("Missing fields")
        }
        const newUser = {
            ...userPayload,
            active: true
        }

        const response = await UsersDao.create(newUser)
        return response;
    }
}
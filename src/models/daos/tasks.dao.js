import taskModel from "../schemas/task.model.js"

class TasksDao {
    async getAll() {
        const tasks = await taskModel.find()
        return tasks
    }

    async getById(id){
        const task = await taskModel.findById(id).lean()
        return task
    }

    async create(payload){
        const newTask = await taskModel.create(payload)
        return newTask
    }

    async update(id, payload){
        const updatedTask = await taskModel.findByIdAndUpdate((id, payload, { new: true }))
        return updatedTask
    }

    async delete(id) {
        const deletedTask = await taskModel.findByIdAndDelete(id);
        return deletedTask;
      }
}

export default new TasksDao()
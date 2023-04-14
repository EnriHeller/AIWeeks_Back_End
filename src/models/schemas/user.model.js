import mongoose from "mongoose"

const userCollection = 'users'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tasks:{
        type: [
            {
                task:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "tasks"
                }
            }
        ],
        default: [],
        required: true
    }
    
})

userSchema.pre('find', function(){
    this.populate('tasks.task')
})

userSchema.pre('findById', function(){
    this.populate('tasks.taskId')
})

const userModel = mongoose.model(userCollection, userSchema)

export default userModel;
import mongoose from "mongoose"

const taskCollection = 'tasks'

const taskSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        unique: true
    },
    notes: { 
        type: String, 
    },
    type:{
        type: String,
        enum: ["routinary", "momentary"],
        default: "routinary",
        required: true
    },
    priority:{
        type: String,
        enum: ["high", "medium", "light"],
        default: "medium",
        required: true
    },
    date:{
        type: {
            time:{
                type: String,
                default: "2h"
            },
            days:{
                type: [String],
                enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            },
            part_day:{
                type: String,
                enum: ["Morning", "Afternoon", "Night"]
            },
        },
        default: {}
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    }
})

const taskModel = mongoose.model(taskCollection, taskSchema)

export default taskModel
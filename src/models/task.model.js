const { Schema, model } = require("mongoose");

const TaskSchema = Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    createdDate: {
        type: Date,
        required: false,
        trim: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

const TaskModel = model("Task", TaskSchema);

module.exports = TaskModel;

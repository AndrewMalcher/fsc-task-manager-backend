const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createdDate: {
        type: Date,
        required: true,
        trim: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;

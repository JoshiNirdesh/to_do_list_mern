const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    createdBy: {
        ref: "user",
        type: mongoose.Schema.ObjectId
    }
}, { timeStamps: true });

const toDoModel = mongoose.model("todo", toDoSchema);
module.exports = toDoModel;
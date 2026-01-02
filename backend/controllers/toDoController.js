const toDoModel = require("../model/toDoModel");


const createToDoController = async (req, res) => {
    try {
        const { title, description, createdBy } = req.body;
        if (!title || !description) {
            return res.status(500).send({
                success: false,
                message: "Please provide title and description"
            })
        }
        const toDo = new toDoModel({ title, description, createdBy });
        await toDo.save();
        res.status(201).send({
            success: true,
            message: "Todo created successfully",
            data: toDo
        });
    } catch (error) {
        res.send(500).send({
            success: false,
            message: "Create todo api error",
            error
        })
    }

}
const getTodoController = async (req, res) => {
    try {
        //get user id
        const { userId } = req.params;
        //validate
        if (!userId) {
            return res.status(404).send({
                success: false,
                message: "No User Found with this id",
            });
        }
        //find task
        const todos = await toDoModel.find({ createdBy: userId });
        if (!todos) {
            return res.status(404).send({
                success: true,
                message: "you have no todos ",
            });
        }
        res.status(200).send({
            success: true,
            message: "Your Todos",
            todos,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Get Todo list API",
            error,
        });
    }
};

module.exports = { createToDoController, getTodoController };
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
module.exports = createToDoController;
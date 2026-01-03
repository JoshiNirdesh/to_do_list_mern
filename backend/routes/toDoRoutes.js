const express = require("express");
const { createToDoController, getTodoController, deleteToDoController, updateToDoController } = require("../controllers/toDoController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post("/create", AuthMiddleware, createToDoController);
router.post("/getAll/:userId", AuthMiddleware, getTodoController);
router.delete("/delete/:id", AuthMiddleware, deleteToDoController);
router.patch("/update/:id", AuthMiddleware, updateToDoController);


module.exports = router;
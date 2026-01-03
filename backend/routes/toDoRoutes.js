const express = require("express");
const { createToDoController, getTodoController, deleteToDoController } = require("../controllers/toDoController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post("/create", AuthMiddleware, createToDoController);
router.post("/getAll/:userId", AuthMiddleware, getTodoController);
router.delete("/delete/:id", AuthMiddleware, deleteToDoController);

module.exports = router;
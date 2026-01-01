const express = require("express");
const createToDoController = require("../controllers/toDoController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post("/create", AuthMiddleware, createToDoController);
module.exports = router;
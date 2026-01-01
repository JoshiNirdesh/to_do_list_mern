const express = require("express");
const createToDoController = require("../controllers/toDoController");

const router = express.Router();

router.post("/create", createToDoController);
module.exports = router;
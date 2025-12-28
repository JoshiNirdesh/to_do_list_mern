const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv")
const cors = require("cors");


const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/test",require("./routes/testRoutes"))
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Running on Port ${PORT}`)
});
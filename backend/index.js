const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv")
const cors = require("cors");
const connectDb = require("./config/db.js");


const app = express();
dotenv.config();
app.use(express.json());

connectDb()
app.use(morgan("dev"));
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Home");
})
app.use("/api/v1/test",require("./routes/testRoutes"))
app.use("/api/v1/user",require("./routes/userRoutes.js"))


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Running on Port ${PORT}`)
});
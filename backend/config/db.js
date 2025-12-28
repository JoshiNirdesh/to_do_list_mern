const mongoose = require("mongoose");

const connectDb = async ()=>{
    try {
             await  mongoose.connect(process.env.MONGO_URL);
            console.log("MongoDb connected Successfully")

    } catch (error) {
        console.log(`Mongo error ${error}`);
        
    }
}
module.exports = connectDb
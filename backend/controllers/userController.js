const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");

// REGISTER
const registerController = async (req,res) => {
    try {
        const {username,email,password} = req.body;

        if(!username || !email || !password){
            return res.status(400).send({
                success:false,
                message:"All fields required"
            });
        }

        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).send({
                success:false,
                message:"User Already Exist"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword  = await bcrypt.hash(password,salt);

        const newUser = new userModel({username,email,password:hashedPassword});
        await newUser.save();

        return res.status(201).send({
            success:true,
            message:"User Created",
            newUser
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Server Error"
        });
    }
}

// LOGIN
const loginController = async (req,res) => {
    console.log("req.body:", req.body);

    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).send({
                success:false,
                message:"Email and Password required"
            });
        }

        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Invalid User"
            });
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(404).send({
                success:false,
                message:"Invalid User"
            });
        }
         res.status(200).send({
            success:true,
            message:"Login successful",
            user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Server Error"
        });
    }
}

// EXPORT
module.exports = {registerController, loginController} ;

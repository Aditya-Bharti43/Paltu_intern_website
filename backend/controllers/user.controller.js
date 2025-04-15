import { User } from "../models/user.model.js";

const userController = async (req,res)=>{
    // get details from frontend
    // check whether the details are present or not
    // check whether user already exists or not
    // if user already exists then send error message
    // if user does not exists then create a new user and send success message
    

    // console.log("Received data:", req.body);
    const {username,phone_no,email} = req.body;
    if(!username || !phone_no || !email){
        return res.status(400).json({
            success:false,
            message:"Please provide all the details"
        })
    }
    console.log("Received data:", req.body);
    
    const user = await User.findOne({$or:[{username},{email}]});

    if(user)
    {
        return res.status(400).json({
            success:false,
            message:"User already exists"
        })
    }

    const newUser = await User.create({username,phone_no,email});

    if(!newUser)
    {
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }

    console.log("USer added successfully");

    return res.status(201).json({
        success:true,
        message:"User created successfully",
        user:newUser
    })
  
    
}


export {userController}
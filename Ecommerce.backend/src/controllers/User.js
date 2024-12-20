import { asyncHandler } from "../utils/asyncHandler.js";



const RegisterUser = asyncHandler(async ( req,res) => {
    console.log("Incoming Request body : ", req.body);
    res.status(200).json({
        message:"Hello world!",
    });

});


export  default {RegisterUser}
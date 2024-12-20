import mongoose from "mongoose";
import { DB_NAME } from "./constraint.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config()
    
const app = express()


const connectDatabase = async () => {
    try{
      const  connectionInstance =   await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);

      console.log(`MongoDB connected !!! : ${connectionInstance.connection.host}`);

      const PORT = 8000
       
      app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT}`);
      })


    
        }
            catch(error){
                console.log("MongoDB connection error",error)
                process.exit(1)
            }      
    }

    
    

    



connectDatabase();


//import express from "express"
/*const app = express()
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("Database connected successfully");
        app.on("error",(error)=> {
            console.log("ERROR",error)
            throw error
        }
        )
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port", process.env.PORT);
            
        })
    } catch (error) {
        console.log(error);
        throw error
    }
})();
*/

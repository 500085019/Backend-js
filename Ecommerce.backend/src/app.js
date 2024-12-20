import express from "express";
import cors from "cors";
import CookieParser from "Cookie-Parser";


const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({limit:"16kb",extended:true}))
app.use(express.static("public"))

app.use(CookieParser())

// routes import 
import UserRoutes from './routes/User.js'
import videoRoutes from "./routes/video.js";

// routes declaration
app.use((req,res,next) => {
    console.log(req.method,req.url);
    next();
});

app.use('/api/v1/users',UserRoutes);
//app.use('/api/v1/video',videoRoutes);

// http://Localhost:8000/api/v1/users/register







export default app


import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleWare/rateLimiter.js";
import cors from "cors"

dotenv.config();
const app=express();
const PORT= process.env.PORT || 5001;
connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("server started on port:",PORT)});
});
app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);


app.use("/notes",notesRoutes);



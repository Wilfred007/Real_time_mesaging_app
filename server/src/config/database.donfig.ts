import mongoose, { mongo } from "mongoose"
import { Env } from "./env-config"

export const connectDB = async () => {
    try {
        await mongoose.connect(Env.MONGODB_URI)
        console.log("Database connected")
    } catch (error) {
        console.log("Database connection error",error);  
        process.exit(1)  
    }
}
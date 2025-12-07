import cookieParser from 'cookie-parser';
import 'dotenv/config';
import express, {Request, Response} from 'express';
import cors from 'cors';
import { Env } from './config/env-config';
import { asyncHandler } from './middlewares/asyncHandler.middleware';
import { HTTPSTATUS } from './config/http-config';
import { errorHandler } from './middlewares/errorHandler.middleware';
import { connectDB } from './config/database.donfig';


const app = express();

app.use(express.json())  // Read JSON from requests
app.use(cookieParser())  // Read cookies from browser - authentication tokens, sessions etc.
app.use(express.urlencoded({extended: true}));  // Read HTML form data
app.use(
    cors({
        origin: Env.FRONTEND_URL,
        credentials: true
    })
)

app.get('/health', asyncHandler( async(req: Request, res: Response) => {
    res.status(HTTPSTATUS.OK).json({
        message: "Server is healthy",
        status: "Success"
    })
}))

app.use(errorHandler);

connectDB();

app.listen(Env.PORT, () => {
    console.log(`Server is running on port ${Env.PORT}`)
})



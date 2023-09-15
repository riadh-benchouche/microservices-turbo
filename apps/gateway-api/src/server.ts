import {json, urlencoded} from "body-parser";
import express, {type Express} from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

export const createServer = (): Express => {
    const app = express();
    dotenv.config();
    app
        .disable("x-powered-by")
        .use(morgan("dev"))
        .use(urlencoded({extended: true}))
        .use(json())
        .use(cors())

    try {
        mongoose.connect(process.env.DB_URI as string).then(r =>
            console.log("Connected to database"));
    } catch (e) {
        console.error(e);
    }

    return app;
};

// require('dotenv').config({path: './env'});
import dotenv from "dotenv";

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import connectDB from './db/db.js';
 dotenv.config({path: './env'});
connectDB();









//approach 1

// import express from "express"
// const app = express();
// (async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error",(err) => {
//             console.log("Error",err);
//             throw err;
//         })
//     }catch(err){
//         console.error("ERROR",err);
//         throw err;
//     }
//     app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`)
//     })
// })()
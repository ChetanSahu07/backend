
//require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
// to use the above syntax of dotenv, we need to add something in script dev in package.json
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

connectDB();




























// we will use ifi here to execute the function immidiately 
// must use semicoloumn before ifi

// connecting with database 
// mongoose.connect(dburl/dbname)

/*

import express from 'express'

const app = express()
;( async ()=>{

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        // App can also listen to error event 
        app.on("error", (error)=>{
            console.log("DB ERROR:" , error )
            throw error
        })

        app.listen( process.env.PORT , ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log("ERROR" , error )
        throw error 
    }
})()

*/

// The above approach is makig index.js very heavy so we will make our db connection in another folder that is in db folder 
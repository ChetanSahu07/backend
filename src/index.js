
//require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
// to use the above syntax of dotenv, we need to add something in script dev in package.json
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

// connectDB is a async funtion so it returns a promise so we can use .then() and .catch()
connectDB()
.then(()=>{
    app.on("error", (err)=>{
        console.log("MONGODB error ", err);
        throw err ;
    })

    app.listen( process.env.PORT || 8000 , ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed " , err);
    
})




























// we will use ifi here to execute the function immidiately 
// must use semicoloumn before ifi

// connecting with database 
// mongoose.connect(dburl/dbname)

/*
import { DB_NAME } from "./constants.js";
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
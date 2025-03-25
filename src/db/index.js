import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async ()=>{

    try {
        // mongodb gives a object response after connecting to db

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`)
        // connectionInstance.connection.host this shows to which DB host we are connected 
        // check the console log of connectionInstance only
    } catch (error) {
        console.log("DB connection error " , error)
        process.exit(1);
    }
}


export default connectDB ; 
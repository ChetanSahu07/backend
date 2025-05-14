import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

// cors gives us many options which we can set for our security purpose
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


// express.json() is showing that we are accepting the json file also 
// it also gives us many options like limit
app.use(express.json({limit:"15kb"}))

// Now we need configuration for taking data from urls.
app.use(express.urlencoded({extended:true , limit:"15kb"}))
// You can see all the options of each configurations in the npm documentation.

// This is used for saving the image or pdf requests in the public folder.
// Here "Public" is the name of the folder where we are saving the images or pdfs.
app.use(express.static("public"))

// Now we also need to configure for cookies so that we can acess and set the cookies of user's browser.
// cookieParser is a middleware which will parse the cookies and make it available in the request object.
app.use(cookieParser())

export {app}

import { Router } from "express";
import {loginUser, logoutUser, registerUser} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

// we get
// upload.fields
// upload.any
// upload.single
// upload.array


router.route("/register").post(
    // This upload is from multer which is acting as middleware
    upload.fields([
        {
            name:"avatar", // always remember that this name should be same as given in the frontend
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
)  // registerUser is a method imported from "../controllers/user.controller.js"


router.route("/login").post(loginUser) ;

// Secured Route 

router.route("/logout").post( verifyJWT, logoutUser ); 

export default router ; 

// This file only defines us that which funtions and requests(post , get , put...) will be runned on different routes
// And the function that will be runned is difined inside controllers  
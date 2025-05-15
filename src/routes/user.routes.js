import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUser)  // registerUser is a method imported from "../controllers/user.controller.js"

export default router ; 

// This file only defines us that which funtions and requests(post , get , put...) will be runned on different routes
// And the function that will be runned is difined inside controllers  
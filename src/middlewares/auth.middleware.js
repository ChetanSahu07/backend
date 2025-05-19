import { User } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken"

const verifyJWT = asyncHandler( async(req , res, next)=>{

    try {
        // A token can be present in the cookie of request or may be present in the header of request as Authentication: Bearer <Token>
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "") ; 
    
        if( !token ){
            throw new ApiError(401, "Unauthorized Request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) 
    
        const user = await User.findById(decodedToken?._id)
    
        if(!user){
            throw new ApiError(401, "Invalid Token")
        }
    
        req.user = user 
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")
    }
})

export {verifyJWT}
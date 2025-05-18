import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/coludinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const registerUser = asyncHandler( async (req , res ) =>{
    // res.status(200).json({
    //     message:"ok"
    // })
    // console.log("hello")



    // Steps to Register User:
    // Get user details from frontend
    // validation of user details 
    // Check if user already exits 
    // check for the files uploaded or not 
    // check for the avatar and cover Image
    // upload it in cloudinary and check properly uploaded or not and then get the link 
    // create entry for the user in db 
    // check the response of entry 
    // remove the refresh token and password from response 
    // return the reponse 

    // console.log("Body", req.body );
    // console.log("Files", req.files);
    
    const { userName , fullName , email, password } = req.body
    //console.log(email , password);

    if([userName, fullName, email, password].some( (eachField) => eachField?.trim() === "" )){
        throw new ApiError(400, "Fill all the required fields") ; 
    }
    // we can also write a check for checking the correct format for email

    const userExist = await User.findOne({
        $or: [{userName}, {email}]
    })

    if( userExist ){
        throw new ApiError(409 , "User already exist for given email or userName")
    }

    // Now we have used multer middleware in the user route
    // this will an extra field that is 'files' in the request 
    // req.files will give the access to the files 
    // req.filse.avatar have many properties like size of file, type of file, name of file and many more in which we can apply validations 
    // req.files.avatar[0].path --> the first property of avatar is object inside which we get another property called path.
    // the path will will give the path of avatar saved by multer

    const avatarLocalPath = req.files?.avatar[0]?.path ;
    // const converImageLocalPath = req.files?.coverImage[0]?.path ;

    let converImageLocalPath;
    //console.log(req.files);

    if( req.files && Array.isArray(req.files.coverImage) ){
        converImageLocalPath = req.files.coverImage[0].path ; 
    }
    
    if( !avatarLocalPath ){
        throw new ApiError(400, "Avatar is required!")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath) ;
    const coverImage = await uploadOnCloudinary(converImageLocalPath);

    //console.log(avatar)

    if( !avatar ){
        throw new ApiError(400, "Avatar is required!")
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url ,
        coverImage: coverImage?.url || "",
        userName: userName.toLowerCase(),
        password,
        email
    })

    // console.log("user" , user);
    

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    // Select all the fields by removing password and refresh Token

    if( !createdUser ){
        throw new ApiError(500, "Something went wrong while registering user")
    }

    res.status(201).json(
        new ApiResponse(
            createdUser,
            "User is sucessfully registered",
            201
        )
    )
    
})


export {registerUser} ; 
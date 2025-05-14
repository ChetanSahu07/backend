import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema({

    userName:{
        type:String,
        required: true ,
        lowercase: true , 
        trim: true,
        unique: true,
        index: true
    },
    email: {
        type: String ,
        required: true ,
        lowercase: true ,
        unique: true ,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,
        required: true // we will use cloudinary link
    },
    coverImage: {
        type: String
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [ true , 'Password is required']
    },
    refreshToken: {
        type: String
    }
},{timestamps:true})


// Below the pre is telling that just before saving the userSchema we will the function given inside
// we can not used callback ()=>{} because it do not have access to 'this' pointer so we have used async function
// There are number of operations happen inside hashing so we have used async function
// we have used isModified to check mark that we will hash the password only if password field is modified 
// bcrypt.hash(this.password , 10 ) here 10 shows the number of rounds of hashing 

userSchema.pre("save", async function(next){

    if( ! this.isModified("password") ){ return next ; }

    this.password = await bcrypt.hash(this.password , 10 )
    next()
})

// Now we need another function to check the password entered is correct or not 
// Use bcrypt.compare( user's entered password , db saved password )
// Mongoose provides use to write custom methods for the schemas
// Syntax:
// userSchema.methods.anyFunctionName = ()=>{}

userSchema.methods.isPasswordCorrect = async function(userPassword){
    return await bcrypt.compare(userPassword, this.password) ;
    // The above will return true or false
}

userSchema.methods.generateAccessToken = function(){

    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.userName,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){

    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model( "User" , userSchema )


// trim means ? 
// it will remove the spaces from the start and end of the string
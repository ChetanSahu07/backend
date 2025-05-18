import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

// First of all set the configuration of cloudinary 
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET
});


const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if( !localFilePath ){ return null }
        const response = await cloudinary.uploader.upload(localFilePath , {
            resource_type: "auto"
        })
        console.log("File has uploaded in cloudinary", response.url)
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        // If the file upload gets failed then delete the file from local storage of server
        console.log( "Upload failes" , error) ;
        return null ; 
    }
}

export {uploadOnCloudinary} ;
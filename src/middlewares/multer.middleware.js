import multer from "multer";

// multer.diskStorage takes two functions, first is destination and second one is filename 
// (req, file, cb) here 'file' the file sent by user

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname)
        // here originalname is the name provided by user 
    }
})
// console log the file so that we can get file local path which will be used in coludinary uploading.
export const upload = multer({
    storage: storage
})
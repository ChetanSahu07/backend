## This is mega backend

## Model Link 
https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2VqZ3p0SThkVmVTSzdzeXRHT3YxbVdCUGt2UXxBQ3Jtc0tuM05nSXhmRTdHMmlBYkpFRk54c002TmhOekwyUHFHN3Bubmc2MEtMX2FlNGh2blJNOEZtZVBVRDdwcVdLakcwMWg1UDhMMGpVajhDY2JEaDNVSmZpclBraWFBQkFtSG9VbXUxT1VsT3laUnFYY1hPUQ&q=https%3A%2F%2Fapp.eraser.io%2Fworkspace%2FYtPqZ1VogxGy1jzIDkzj%3Forigin%3Dshare&v=9B4CvtzXRpc

## Nodemon
Nodemon is a dev dependency so do not install it like npm i nodemon
do it like: npm install --save-dev nodemon
and then go to scripts in pacakage.json and write 
"dev" : "nodemon src/index.js"

## now set the folders and perttier

## Now set the mongoDB atlas and then set link in .env

now install mongoose express and dotenv
then there are two approaches to connect to db one is ifi and second is in db
-- Always remember the try catch and async await while connecting to db because db is in another continent.
-- As early as possible , import the dotenv to our file because it make access of every .env file to all other files.
  traditional method to import dotenv : require('dotenv').config({path:'./env'})
  but we will use another method which need change in dev script. 

## we use app.use() for middlewares and having configurations

## step 5
Install cookie-parser and cors then import it in app.js <br/>

All the configurations and middlewares are only in app.js then we need to import app.js in src/index.js .


## cookies

What Are Cookies in Web Development?
Cookies are small pieces of data stored on a user's browser by websites. They help websites remember users, store preferences, and track activity across sessions.

Think of cookies like a note that a website gives to your browser. When you visit the website again, your browser returns the note, helping the website recognize you.
<br/>
Why Are Cookies Used?
Session Management – Maintain user login sessions (e.g., staying logged in on a website).

Personalization – Save user preferences (e.g., dark mode, language settings).

Tracking & Analytics – Monitor user activity for analytics and targeted ads.

## cookieParser

What is cookie-parser?
cookie-parser is a middleware for Express.js that is used to parse cookies attached to the client’s request. It helps retrieve cookie data in an easy-to-use format from the HTTP request headers.
<br/>
When a browser sends a request to a server, it may include cookies. These cookies are stored in the Cookie header of the request. The cookie-parser middleware reads this header, parses the cookies, and makes them available in req.cookies (and req.signedCookies for signed cookies).

## No need of body parser because it is already included in express 

## ( err , req , res , next ) middlewares are written in sequence 
Middlewares are checkins like user is loggedin or not he is admin or not like that.

## We want that everytime respones/Error we sent should be in same error 
For this we need nodejs api error <br/>

So node js gives us an Error class in which we can override the values and make it accordingly .
<br/>
Here we are setting our standard that if statusCode < 400 then it will be apiResponse for us otherwise it will be under apiError.

So we have created ApiError and ApiResponse inside utility folder


## Create the User and Video model and then install mongoose-agregate-paginate-v2 for writing complex aggregate quieries

https://www.npmjs.com/package/mongoose-aggregate-paginate-v2

<br/>

this allows us to use real power of mongoose
<br/>
Mongoose also have many middlewares like 'pre' hook. Also we can use our own plugins 

## Installing Bcrypt and JWT (JsonWebToken)
Bcypt is used for hashing the password. There are two things: core Bcrypt and BcryptJs, we can any one of these.
<br/>

We have done encryption and decryption of the password using mongoose middleware and custom method.
<br/>
Then here we will create the acess_token key and refresh token key , and expiry of both in enviroment variables <br/>
then create method to generate the both tokens.

## FILE UPLOADING

--> Now we will see that how we will upload the files. <br>
--> First thing need is Cloudinary <br>
--> Second thing is Multer <br>

We have two step setting, Multer receives the file from the frontend (client).
Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.<br/>
Once Multer gives you the file (in memory or disk), your backend uses the cloudinary.uploader.upload() function to send the file to Cloudinary.<br/>

In Cloudinary.js we write the code to fetch the file from server and upload to cloudinary.<br/>
--> FS the by Default File System by Node.Js. It is for the file handling. It just need the path of file. <br/>
--> We will use file linking and unlinking. Unlinking means simply deleting the file.<br/>
--> Create a middleware to upload files on disk Storage with the help of multer.<br/>

## Know all about HTTP 
--> See Hitesh sir's pdf attached 

## Second Part of project starts here 

## Controllers and Routes
### user.controller.js 
Here we will create a function of register user.
### Defining Route for register
So the thing is that we will define middleware in app.js.<br/>
When define a parent router /user then the controll is given to userRoute then it dicides where to go : /user/register  OR /user/login and also defines what functions to run in that routes.<br/>
--> See the steps how it is working <br/>
--> api/v1/users --> user.routes --> api/v1/users/register --> post request --> userRegister --> asyncHandler <br/>
--> Check the response in the postman.<br/>
Now we have commented that code and written actuall code for regestering user in database.

## Actual Registration of user 
### Take the data from req.body 
it gives the form and json data
### handle file handling by multer middleware in user router
see the syntax and details 
### The steps to register the user is now available in the user.controller.js 


##  login User 
--> For login in user what we need to do is that we need to create access and refresh token <br/>
--> And then properly send the access and refresh token to the user through cookies .

## Logout usesr
--> For loggin out the user what we need is that we need to design our own middleware <br/>
--> And the middleware is for authentication 



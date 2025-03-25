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
-- Always remember the try catch and async await while connecting to db because db is another continent.
-- As early as possible , import the dotenv to our file because it make access of every .env file to all other files.
  traditional method to import dotenv : require('dotenv').config({path:'./env'})
  but we will use another method 

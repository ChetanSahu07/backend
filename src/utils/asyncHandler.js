/*Detailed Explanation of asyncHandler (Promise-based Version)
This version of asyncHandler is slightly different but serves the same purpose: handling errors in asynchronous Express route handlers without needing try-catch blocks inside every route.

1️⃣ Purpose of asyncHandler
Express route handlers are often asynchronous (async functions) because they interact with databases or external APIs.

If an error occurs in an async function, we need to pass it to the Express's next() function so that Express can handle it properly.

Instead of writing try-catch manually in every route, we use asyncHandler to automatically catch errors and forward them to Express’s error-handling middleware.

2️⃣ Breaking Down the Code Line by Line
javascript

[ const asyncHandler = (requestHandler) => { ]

This function takes a route handler (requestHandler) as an argument.

requestHandler is expected to be an async function (like an Express route).

javascript

   [ return (req, res, next) => { ]

This function returns another function that Express will use as a middleware.

It accepts the standard Express parameters:

req → The request object.

res → The response object.

next → The next middleware function (used for error handling).

javascript

[   Promise.resolve(requestHandler(req, res, next))  ]

This calls requestHandler(req, res, next) and wraps it inside Promise.resolve().

If requestHandler returns a promise, Promise.resolve() ensures that the promise is handled properly.

If requestHandler succeeds, execution continues normally.

javascript

    [ .catch((err) => next(err)) ]
If requestHandler throws an error or rejects a promise, the .catch() method catches it.

The error is passed to next(err), which tells Express to handle it using its default error-handling middleware.

3️⃣ How Does This Version Work?
This version relies on Promise chaining rather than a try-catch block.

With try-catch (Manual Approach)
javascript

[

app.get("/users", async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

]


👆 Manually catching errors in every route is repetitive.

With asyncHandler (Automatic Error Handling)
javascript

[

app.get("/users", asyncHandler(async (req, res, next) => {
    const users = await User.find();
    res.json(users);
}));

]
✅ asyncHandler automatically wraps the function and forwards errors to Express.



Since asyncHandler forwards errors to next(err), we must define an Express error-handling middleware:

javascript

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

✅ This catches errors from all routes and sends a structured error response.
*/


const asyncHandler = (fun)=>{
    
    return (req , res , next )=>{
        Promise.resolve( fun(req,res,next) ).catch((err)=>next(err))
    }
}

export {asyncHandler} ;


// Another Approach

// const asyncHandler = (fun)=> async (req , res , next ) =>{

//     try {
//         await fun(req,res,next)
//     } catch (error) {
//         res.status( error.code || 500 ).json({
//             success : true ,
//             message : error.message
//         })
//     }
// }




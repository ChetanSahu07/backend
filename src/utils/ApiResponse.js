class ApiResponse{
    
    constructor(
        data ,
        message = "success",
        statusCode
    ){
        this.message = message 
        this.statusCode = statusCode
        this.data = data 
        this.success = statusCode < 400 
        // we have set our own limit of 400 that if statuscode is less than 400 then there is no error in apiResponse
        
    }
}

export {ApiResponse}
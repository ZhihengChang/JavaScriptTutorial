'use strict'
//Error handling
//try catch
/*
-> excute try
    -> an error occured
        -> ignore the rest of try -> excute catch
    -> no errors
        -> ignor the catch
*/
try{
    console.log("start of try");
    error;
    console.log("end of try");
}catch(err){
    console.log("An Error found");
}
//NOTE: try catch only works for run time errors
//      wouldn't work for syntax error

//Error Object
/*
properties:
-name       Error name
-message    textual message about error details
-stack      current call stack
*/
try{
    error;
}catch(err){
    console.log(err.name);
    console.log(err.message);
    // console.log(err.stack);
}
//NOTE: err is optional

//throwing own errors:
// let error = new Error("Things happen o_0");
try{
    let user = JSON.parse('{"age":30}');
    if(!user.name){
        throw new SyntaxError('Incomplete data')
    }
    console.log(user.name);
}catch(e){
    console.log("JSON Error: " + e.message);
}

//Rethrowing
try{
    let user = JSON.parse('{"age":30}');
    error;
    if(!user.name){
        throw new SyntaxError('Incomplete data')
    }
    console.log(user.name);
}catch(e){
    if(e instanceof SyntaxError){
        console.log("JSON Error: " + e.message);
    }else{
        //this will kill the script
        //throw e;
    }
}

//try catch finally
//finally execute always
try{
    console.log('try');
    error;
}catch(e){
    console.log("catch");
}finally{
    console.log('finally')
}

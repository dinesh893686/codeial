const express = require('express')
const app=express();
const port=8000
// `String text ${expression}`




// console.log('Error in running a server:$(err)')
// } console.log('Error in running a server:$(err)')
//     }
//     else{
        
// else{
    


app.listen(port,function(err)
{
    if(err)
    {

     console.log(`Error in running a server ${err}`)
    }
    else{
        console.log(`server is up and running on ${port}`)
    }

})
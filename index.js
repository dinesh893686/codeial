const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app=express();
const port=8000
// `String text ${expression}`
app.use(express.static('./public'))
app.use(expressLayouts);
app.set("layout extractStyles", true)
app.set("layout extractScripts", true)
// console.log('Error in running a server:$(err)')
// } console.log('Error in running a server:$(err)')
//     }
//     else{
        
// else{

//setting view engine ejs
app.set('view engine','ejs')
app.set('path','./views')

    

//Adding routes 
app.use('/',require('./routes'));


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
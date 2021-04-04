module.exports.home=function(req,res)
{
   // res.end('<h1>Codeial is up and running</h1>')
   return res.render('home',
   {
       title:"Home"
   })
}

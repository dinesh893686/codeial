module.exports.profile=function(req,res)
{
    // res.end("<h1>Profile Created</h1>")
    return res.render('./user/user_profile',{
        title:"user profile",
        name:"Dinesh"
    })
}
module.exports.posts=function(req,res)
{
    // res.end("<h1>User Posts Created<h1>")
    return res.render('./user/user_posts',{
        title:"user posts",
        posts:"story"
    })

}
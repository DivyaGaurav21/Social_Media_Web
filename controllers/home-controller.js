module.exports.home = (req , res) =>{
   return res.render('home' , {
    title: "home"
   })
}
module.exports.profile = (req , res) =>{
   return res.render('user_profile' , {
    title: "profile"
   })
}
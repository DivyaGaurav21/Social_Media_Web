const Post = require('../models/post');

module.exports.create= (req ,res) => {
    // console.log(req.body)
    // console.log(req.user);
    Post.create({
        content : req.body.content ,
        user : req.user._id
       }, (err , post) => {
        if(err){console.log('error in creating a post');return}
    
        return res.redirect('back');
       })
}
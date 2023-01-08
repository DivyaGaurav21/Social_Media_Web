const Post = require('../models/post');

module.exports.create= (req ,res) => {
    console.log(req.body)
    // Post.create({
    //     content : req.body.content ,
    //     user : req.user_id
    //    }, (err , post) => {
    //     if(err){console.log('error in creating a post');return}
    
    //     return res.redirect('back');
    //    })
}
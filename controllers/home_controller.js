const Post = require('../models/post')
module.exports.home = (req, res) => {
//    console.log(req.cookies)
    // Post.find({}, (err, posts) => {
    //     if (err) {
    //         console.log('error in finding post');
    //         return;
    //     }
    //     return res.render('home', {
    //         title: "home ||Social media",
    //         posts : posts
    //     })
    // })

    Post.find({}).populate('user').exec(
        (err, posts) => {
        if (err) {
            console.log('error in finding post');
            return;
        }
        return res.render('home', {
            title: "home ||Social media",
            posts : posts
        })
    } )
}

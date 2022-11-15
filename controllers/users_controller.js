//import model of db
const User = require('../models/user');

module.exports.profile = (req, res) => {
    if(req.cookies.user_id){
    User.findById(req.cookies.user_id , (err , user) => {
        if(err){console.log('error in finding cookie'); return}
        if(user){
            return res.render('user_profile', {
                title: "profile",
                User : user
            })
        }else{
            return res.redirect('/users/sign-in')
        }
    })
     }
    }

//render the sign up page
module.exports.signUp = (req, res) => {
    return res.render('user_sign_Up', {
        title: "Social | Sign Up"
    })
}
//render the sign in page
module.exports.signIn = (req, res) => {
    return res.render('user_sign_in', {
        title: "Social | Sign In"
    })
}

//get the sign up data
module.exports.create = (req, res) => {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) { console.log('error in finding user in signing up'); return }
        if (!user) {
            User.create(req.body, (err, user) => {
                if (err) { console.log('error in creating User in signing up'); return }
                return res.redirect('/users/sign-in');
            })
        } else {
            return res.redirect('back');
        }
    })

}

//sign in and create a session for user
module.exports.createSession = (req, res) => {
    //steps for authenticate
    //find the User
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) { console.log('error is finding user for sign in'); return }
        //handle user found
        if (user) {
            //handle password which doesnot match
            if (user.password != req.body.password) {
                return res.redirect('back');
            } else {
                //handle session creation
                res.cookie('user_id' , user.id);
                return res.redirect('/users/profile')
            }
        } else {
            //handle user not found
            return res.redirect('back');

        }
    })
}
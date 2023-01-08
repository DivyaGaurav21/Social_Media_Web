const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content : {
        type : String , 
        required : true
    },
    user: {
        type : String ,
        required:true
    }
} ,{
    timestamps : true
})

const Post = mongoose.model('Post' , postSchema);

module.exports = Post;
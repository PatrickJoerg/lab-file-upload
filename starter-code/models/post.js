const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PostSchema = Schema({
    content: String,
    creatorID: String,
    picture_path: String,
    picture_name: String
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post; 
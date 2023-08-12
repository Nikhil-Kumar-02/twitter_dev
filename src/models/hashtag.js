const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    tweets : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'tweet'
        }
    ]
} , {timestamps : true})

const hashtag = mongoose.model('hashtag' , hashtagSchema);

module.exports = hashtag;
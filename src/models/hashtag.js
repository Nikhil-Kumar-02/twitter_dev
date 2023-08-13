import mongoose from "mongoose";

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

export default hashtag;
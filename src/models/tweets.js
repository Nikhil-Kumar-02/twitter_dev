const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        max : [250 , 'tweet can not be more than 250 characters']
    },
    hashtags : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'hashtag'
        }
    ]
    // userEmail : {
    //     type : String
    // },
    // comments : [
    //     {
    //         // content : {
    //         //     type : String,
    //         //     required : true 
    //         // }
    //         //above was used in the beginning
    //         type : mongoose.Schema.Types.ObjectId,
    //         ref : 'Comment'
    //     }
    // ]
},{
    timestamps : true
});

// tweetSchema.virtual('contentWithEmail').get(function process(){
//     return `${this.content} \nCreated by : ${this.userEmail}`;
// })

// tweetSchema.pre('save' , function(next){
//     console.log('before saving anything this will be printed');
//     this.content = this.content + "..."
//     //above line will add three dots to the content of the tweet every time before creating a tweet
//     next();
// })
//we can also create a post hooks to replicate the on delete cascade functionality
//if the user is deleted then we can delete all the tweets and comment by him in the post hook

const tweet = mongoose.model('tweet' , tweetSchema);

module.exports = tweet;



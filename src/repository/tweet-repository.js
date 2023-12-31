import Tweet from '../models/tweets.js'
import CrudRepository from './crud-repository.js'

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);
    }

    async createTweet(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async find(id){
        try {
            const result = await Tweet.findById(id).populate({path : 'likes'});
            return result;
        } catch (error) {
            console.log('something went wrong in the crud repo');
            throw error;
        }
    }

    async getTweetwithComments(tweetId){
        try {
            const tweet = await Tweet.findById(tweetId).populate({
                path : 'comments',
                populate : {
                    path : 'comments'
                }
            });
            // const tweet = await Tweet.findById(tweetId).populate({path : 'comments'}).lean();
            //lean will help us return simple javascript object and not mongoose object a mongoose object has
            //getter setter functionalities and everytime returning mongose object blindly is not optimised
            //thing so we can rather return simple javascript object
            /*
            comments : [
                {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : 'Comment'
                }
            ]
            cuz here comments has an array of values so we have to use path has it been like 
            user : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'user'
            }
            then .populate('user') will work fine
            */
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    // async updateTweet(tweetId , data){
    //     try {
    //         // const tweet = await Tweet.findByIdAndUpdate(tweetId , data);
    //         //when i am using the above line then i am getting the data which was there before
    //         //the updation but i want the newly updated data as a result and below will give it
    //         const tweet = await Tweet.findByIdAndUpdate(tweetId,data,{new : true});
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    async getSomeTweets(limit , offset){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);;
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

}

export default TweetRepository;


import TweetService from '../services/tweet-service.js'

const tweetService = new TweetService();

export const createTweet = async (req,res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(200).json({
            sucess : true,
            message : "sucessfully created a tweet",
            data : response,
            error : {}
        })
    } catch (error) {
        return res.status(500).json({
            sucess : false,
            message : "something went wrong",
            data : {},
            error : error
        });
    }
}
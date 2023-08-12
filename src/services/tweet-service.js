const { TweetRepository } = require('../repository/index');

class TweetService{

    constructor(){
        this.tweetRepository = new TweetRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((ele) => ele.substring(1));
        console.log(tags);
        //todo create hashtags and add here
        /*
            1. bulkcreate in mongoose
            2. filter title of hashtags based on multiple tags
            3. how to add tweet id inside all hashtags
        */
        const tweet = await this.tweetRepository.createTweet(data);
        return tweet;
    }
    /*
        this is my #first #tweet. i am really #excited 
    */
}

module.exports = TweetService;
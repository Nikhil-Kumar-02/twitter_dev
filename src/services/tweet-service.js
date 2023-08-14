import { TweetRepository, HashtagRepository } from '../repository/index.js';

class TweetService{

    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;

        const tweet = await this.tweetRepository.createTweet(data);

        const tags = content.match(/#[a-zA-Z0-9_]+/g);
        const title = tags.map((tag) => {
            return tag.substring(1).toLowerCase()
        });

        const alreadyPresentTags = await this.hashtagRepository.findByName(title);
        //title = ['Fun', 'Cold' , 'War', 'Carrer']
        //alreadyPresentTags = [ { title: 'Fun' } , {title: 'Carrer' } ]
        
        //already present tags are in the form of objects like title : "something"
        //we will first change them into normal form
        const presentTags = alreadyPresentTags.map((tag) => {
            return tag.title
        })
        //presentTags = ['Fun','Carrer']

        //now we want the intersection of both
        const newTags = title.filter( (tag) => {
            return !presentTags.includes(tag);
        })
        //above will filter out all those which were not present in the presentTags array
        //newTags = ['Cold' , 'War']

        //now we have unique tags we just have to bulk create it but in the bulkcreate we
        //have to send the object in this form
        //{ title : 'Cold' , tweets : [] } , 
        //so we have to process the data
        

        const objectifiedNewTags = newTags.map((tag) => {
            return {title : tag , tweets : [tweet.id]}
        })
        //this tweet is the response of the tweeet we have created above so it will indeed have an id
        //now we have data in the required form so we can bulk create
        const response = await this.hashtagRepository.bulkCreate(objectifiedNewTags);

        //in the already present tags we have add this new created tweet id
        //and we can do it parallaly we dont need to wait asynchronously
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })

        //todo create hashtags and add here
        /*
            1. bulkcreate in mongoose
            2. filter title of hashtags based on multiple tags
            3. how to add tweet id inside all hashtags
        */
        return tweet;
    }
    /*
        this is my #first #tweet. i am really #excited 
    */

    async get(tweetId){
        const tweet = await this.tweetRepository.getTweetwithComments(tweetId);
        return tweet;
    }
}

export default TweetService;
import Hashtag from '../models/hashtag.js'

class HashtagRepository {

    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(tweetId){
        try {
            const tag = await Hashtag.findById(tweetId);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }


    async delete(tweetId){
        try {
            const response = await Hashtag.findByIdAndRemove(tweetId);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(tagsList){
        try {
            const tags = await Hashtag.find({
                title : tagsList
            });
            // const tags = await Hashtag.find({
            //     title : tagsList
            // }).select('title -_id');
            // const tags = await Hashtag.find({
            //     title : tagsList
            // }).select(['title','-_id']);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }


}

export default HashtagRepository;


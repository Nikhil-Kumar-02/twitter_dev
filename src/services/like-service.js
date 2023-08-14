import { LikeRepository , TweetRepository } from '../repository/index.js'

class LikeService{

    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){// /api/v1/likes/toggle?id=modelid&type=Tweet
        if(modelType == 'Tweet'){
            var likable = await this.tweetRepository.find(modelId);
        }
        else if(modelType == 'Comment'){
            //todo
        }
        else{
            throw new Error('unknown model type');
        }
        //we are checking if the current user already has like on current tweet or comment
        const exists = await this.likeRepository.findByUserAndLikable({
            user : userId,
            likeable : modelId,
            onModel : modelType
        });

        if(exists){
            //then we have to remove it
            likable.likes.pull(exists.id);
            await likable.save();
            await this.likeRepository.destroy(exists.id);
            var isAdded = false;
        }
        else{
            //we have to add a new like
            const newLike = await this.likeRepository.create({
                user : userId,
                likeable : modelId,
                onModel : modelType
            });
            likable.likes.push(newLike);
            await likable.save();
            var isAdded = true;
        }
        return isAdded;
    }

}

export default LikeService;
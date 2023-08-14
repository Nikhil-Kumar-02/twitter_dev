import LikeService from '../services/like-service.js';

const likeService = new LikeService();

export const toggleLike = async (req,res) =>{
    try {
        // /api/v1/likes/toggle?id=modelid&type=Tweet
        const response = await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(200).json({
            sucess : true,
            data : response,
            err : {},
            message : 'sucessfully toggled like'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess : false,
            data : {},
            message : "something went wrong",
            err : error
        })
    }
}


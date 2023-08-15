import CommentService from '../services/comment-service.js';

const commentService = new CommentService();

export const CreateComment = async (req,res) =>{
    try {
        
        const response = await commentService.createComment(req.query.modelId,req.query.modelType, req.user.id , req.body.content);
        return res.status(200).json({
            sucess : true,
            data : response,
            err : {},
            message : 'sucessfully created new Comment'
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


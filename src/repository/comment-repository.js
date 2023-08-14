import Comment from '../models/comments.js';
import CrudRepository from '../repository/crud-repository.js';

class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment);
    }
}

export default CommentRepository;
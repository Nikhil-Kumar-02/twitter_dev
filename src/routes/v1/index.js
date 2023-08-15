import express from 'express';

import { createTweet , getTweet} from '../../controller/tweet-controller.js';
import { toggleLike } from '../../controller/like-controller.js';
import { CreateComment } from '../../controller/comment-controller.js';
import { signup , login} from '../../controller/auth-controller.js'
import {authenticate} from '../../middlewares/authenticate.js';


const router = express.Router();

router.post('/tweets' , authenticate ,createTweet); 

router.post('/likes/toggle' , toggleLike);

router.get('/tweets/:id' , getTweet);

router.post('/comment' ,authenticate, CreateComment);

router.post('/signup' , signup);
router.post('/login' , login);

export default router;
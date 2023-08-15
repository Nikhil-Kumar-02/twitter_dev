import express from 'express';
const app = express();
import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';
import bodyParser from 'body-parser';
import passport from 'passport';
import {passportAuth} from './config/jwt-middleware.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api' , apiRoutes);


app.listen(9898 , async () => {
    console.log('server started');
    await connect();
    console.log('mongo db connected: ');

    // const createTweet = await tweet.create({
    //     content : 'this is my third tweet',
    // });
    // console.log(createTweet);
    // const getTweet = await tweet.find({_id : "64ca6a123cc818f274115ad0"});
    // const getTweet = await tweet.findById("64ca6a123cc818f274115ad0");
    // getTweet.userEmail = "b@c.com";
    // await getTweet.save();
    // console.log(getTweet);
    // const repo = new Repo();
    // const tweet = await tweetrepo.createTweet({content : "some random tweet"});
    // tweet.comments.push({content : "this is mys comment"});
    // await tweet.save();
    // console.log(tweet);

    // const tweet = await tweetrepo.createTweet({content : "tweet with a different comment schema"});
    // const coment = await comment.create({content : "new Comment of a different seperate schema"});
    // tweet.comments.push(coment);
    // await tweet.save();
    // console.log(tweet);
    // const tags = await repo.create({
    //     content : "my other #CODe #Works or #NOT"
    // })
    // console.log(tags);

    // const userRepository = new UserRepository();
    // const likeService = new LikeService();
    // const tweetRepository = new TweetRepository();

    // const tweet = await tweetRepository.getSomeTweets(4,0);

    // const user =await userRepository.getAll({
    //     email : "nikhil@gmail.com",
    //     password : "123456",
    //     name : "nick"
    // })

    // await likeService.toggleLike(tweet[0].id , 'Tweet' , user[0].id);


})



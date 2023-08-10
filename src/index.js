const express = require('express');
const app = express();
const connect = require('./config/database');
const tweetRepo = require('./repository/tweet-repository');
const comment = require('./models/comments');

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
    const tweetrepo = new tweetRepo();
    // const tweet = await tweetrepo.createTweet({content : "some random tweet"});
    // tweet.comments.push({content : "this is mys comment"});
    // await tweet.save();
    // console.log(tweet);

    // const tweet = await tweetrepo.createTweet({content : "tweet with a different comment schema"});
    // const coment = await comment.create({content : "new Comment of a different seperate schema"});
    // tweet.comments.push(coment);
    // await tweet.save();
    // console.log(tweet);

    const tweet = await tweetrepo.createTweet({content : "with hooks"});
    console.log(tweet);

})



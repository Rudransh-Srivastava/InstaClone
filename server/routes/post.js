const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = mongoose.model("Post")
const requireLogin = require('../middleware/requireLogin')

router.post('/createpost',requireLogin,(req,res)=>{
    const{title,body} = req.body;
    if(!title || !body)
    {
        return res.status(400).send({message:"All fields are mandatory"})
    }
    else{
        req.user.password = undefined; // This we are doing so that when we print result at line -21, our password doesn't show up.
        const post = new Post({
            title,
            body,
            postedBy: req.user
        })
        post.save().then(result=>{
            res.status(200).send({message:"Post Created Successfully",post:result})
        }).catch(err=>{
            res.status(400).send({error:err})
        })
    }
})

router.get('/allpost',(req,res)=>{
    Post.find().populate("postedBy","name").then(posts=>{  // We use ‘populate(postedBy)’ keyword to get all the details of the user from the id.
        res.status(200).send({posts})
    }).catch(err=>{
        res.status(400).send({error:err});
    })
})

router.get('/myposts',requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id}).populate("postedBy","name").then(mypost=>{
        res.status(200).send({mypost});
    }).catch(err=>{
        res.status(400).send({error:err});
    })
})

module.exports = router;




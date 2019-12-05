const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET ALL POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

//CREATE NEW POST
router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save()
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
    
});

//Get One Post
router.get('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
    res.json(post);
    }catch(err){
        res.json({message: err});
    }

})
// $set : {description: req.body.description} 
//Update Post
router.patch('/:id', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne({_id: req.params.id}, {
            $set : {
                title: req.body.title,  
                description: req.body.description
            }

        });
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
})

//Delete Post
router.delete('/:id', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.id});
        res.json(removedPost); 
    }catch(err) {
        res.json({message: err});
    }
});
    
    
module.exports = router;
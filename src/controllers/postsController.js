const e = require("express");
const postsService = require("../services/postsService");

const getAllPosts = async (req, res) => {
    // *** ADD ***

    try {
        console.log('entre all posts')
        const allPosts = await postsService.getAllPosts();
        console.log(allPosts + ' del controller');
        res.send(allPosts);
    } catch (error) {
        console.log(error);
        res.send({status:"FAILED", error:error.message || 'reading error'})
    }
    
  };

  const createNewPost = async (req, res) => {
    const {body} = req;
    if(
        !body.id || !body.postImg || !body.userId || !body.tags
    ){
        res.status(400).send({status:"FAILED", data:{error:"Missing data"}});
    }else{
        try {
            const newPost = body;
            console.log('body del post ' + newPost);
            const createdPost = await postsService.createNewPost(newPost);
            res.status(201).send(createdPost)
        } catch (error) {
            res.status(error?.status || 500).send({status:"FAILED", data:{error: error?.message || error}})
        }
        
    }

    
  }

module.exports = {getAllPosts, createNewPost};
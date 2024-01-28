const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

//container for all  posts
const blogPosts = [];

//middleware to parse json data
app.use(bodyParser.json());

//Endpoint to get all blog posts
app.get('/', (req, res) => {
    res.json(blogPosts);
})


//Endpoint to  create a new post
app.post('/posts', (req, res) => {
    //taken title and body from the req.body object
    const {title, content} = req.body;

    //creating an object called newPost
    const newPost = {id: Date.now(), title, content};
    blogPosts.push(newPost);

    //201->created, returns the newly created post as a JSON response
    res.status(201).json(newPost);
})



//Endpoint to get a specefic post by ID
app.get('/posts/:id', (req, res) => {
    const postID = parseInt(req.params.id);
    const post = blogPosts.find(post => post.id === postID);
    if(!post){
        res.status(404).json({error: 'Post not found'});
    } else {
        res.json(post);
    }
})



//Endpoint to update a post by ID
app.put('/posts/:id', (req, res) => {
    const postID = parseInt(req.params.id);
    const postIndex = blogPosts.findIndex(post => post.id === postID);
    if(postIndex === -1){
        res.status(404).json({error: 'Post not found'});
    } else {
        const {title, content} = req.body;
        blogPosts[postIndex] = {...blogPosts[postIndex], title, content};
    }
})

//Endpoint to delete a post by I
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    blogPosts = blogPosts.filter(post => post.id !== postId);
    res.status(204).send();
  });



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
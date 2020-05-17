const express=require("express");

const bodyParser = require("body-parser");
const mongoose=require('mongoose');


const Post=require('./models/post');
const app=express();

//mongoose db connection
mongoose.connect("mongodb+srv://mean_user:vYsgAwK5Ju1Zj4en@cluster0-4kfux.mongodb.net/node-angular?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then(()=>{
  console.log('hurrey connected to the database.')
})
.catch(()=>{
  console.log('connection failed.');
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept");
 res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS");
 next();
});

//add post to the database
app.post("/api/posts",(req,res,next)=> {
  const post= new Post({
    title:req.body.title,
    content:req.body.content
  });
  //mongoose automatically make query and save it to the db
post.save().then(createdPost=>{
  res.status(201).json({
    message:'post added successfully',
    postId:createdPost._id
  });
});
});

//fetch post from the database
app.get("/api/posts",(req,res,next)=>{
  Post.find().then(documents=>{
    res.status(200).json({
      message:'post fetched successfully',
      posts:documents
    });
  });

});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});


module.exports=app;

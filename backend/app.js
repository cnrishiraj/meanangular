const express=require("express");

const bodyParser = require("body-parser");
const mongoose=require('mongoose');

const postsRoutes = require("./routes/posts");
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
 res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
 next();
});

app.use("/api/posts", postsRoutes);

module.exports=app;

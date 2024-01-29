const express = require('express')
const app = express();
const PORT = 1000;




app.listen(PORT,()=>{
    console.log("server is running")
})

app.get('/',(req,res)=>{
    res.status(200).json({text:'server is running'})
})

// get all users
app.get('/users',(req,res)=>{
    res.status(200).json("hi")
})

// new user post 
app.post('/users',(req,res)=>{
    res.status(201).json("user added ")
})

// get spefic user information
app.get('/user/:id',(req,res)=>{
    const {id} = req.params;
    res.status(200).json(`User information paisi ${id}`)
}) 

// update user 
app.put('/user/:id',(req,res)=>{
    const {id} = req.params;
    res.status(201).json(`user updated ${id}`)
})

// user deleted
app.delete('/user/:id',(req,res)=>{
    const {id} = req.params;
    res.status(201).json(`user deleted ${id}`)
})


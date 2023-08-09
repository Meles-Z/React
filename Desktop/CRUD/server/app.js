const express=require('express');
const mongoose= require('mongoose')
const cors=require('cors')
const userModel= require('./Models/Users')

const app=express();
app.use(cors())
app.use(express.json())

app.post('/createUser', (req, res)=>{
    userModel.create(req.body)
    .then(users=>res.json(users))
    .catch(error=>res.json(error));
})

app.get('/getUser/:id', (req, res)=>{
    const id=req.params.id;
    userModel.findById({id})
    .then(users=>res.json(users))
    .catch(error=>res.json(error));
})
mongoose.connect('mongodb://127.0.0.1:27017/registration').then(()=>{
   
 
})
app.listen(3000, ()=>{
    console.log("We listen you on the port of 3000");
})
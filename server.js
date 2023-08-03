const express = require('express');
 const mongoose = require('mongoose');
 const Product=require('./Models/product');
const app=express();
app.use(express.json());

app.use(express.urlencoded({extended:false}))

 app.get('/', (req, res)=>{
    res.send("Hello Express API")
 });

 app.get('/blog', (res, resp)=>{
    resp.send("I am Meles zawude");
 });


 //select by id and get data
 app.get('/product/:id', async(res, resp)=>{
   try {
      const {id}=res.params;
      const getdatai=await Product.findById(id);
      resp.status(200).json(getdatai);
   } catch (error) {
      resp.status(500).json({message: error.message});
   }

 })
//select all data
 app.get('/product', async(res,resp)=>{
  try {
   const getdata=await Product.find({});
   resp.status(200).json(getdata);
   
  } catch (error) {
   
   resp.status(500).json({message: error.message});
   
  }
 })

 //I think we create data
 app.post('/product', async(res, resp) =>{
   try {
      const product= await Product.create(res.body);
      resp.status(200).json(product);

   } catch (error) {
      console.log(error.message);
      resp.status(500).json({message: error.message});
   }
 });
 
 //update data item
 app.put('/product/:id', async(res, resp)=>{
   try {
      const {id} =res.params;
      const updateData=await Product.findByIdAndUpdate(id, res.body);
      if(!Product){
        return resp.status(404).json({message: `Cannot find any product ${id}`});
      }
      const updatedProduct=await Product.findById(id);
      resp.status(200).json(updatedProduct);
   } catch (error) {
      resp.status(500).json({message: error.message});
   }
 })

 //delete data item
 app.delete('/product/:id', async(res, resp)=>{
   try {
      const {id} =res.params;
      const deleteData = await Product.findByIdAndDelete(id);
      if (!deleteData) {
         return resp.status(400).json({message:`We cannot delete data ${id}`})   
      }
      resp.status(200).json(deleteData);


      resp.status(200)
      
   } catch (error) {
      resp.status(500).json({message: error.message});
      
   }
 })
mongoose.connect('mongodb://127.0.0.1:27017/mydb').then(()=>{
   console.log("Connected to db");
   app.listen(1000, ()=>{
      console.log("We listen you on the port of 3000");
   })
}).catch((error)=>{
   console.log(error)

})
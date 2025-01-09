const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(path.join(__dirname,'static')))


app.get('/home',(req,res)=>{
    // res.sendFile(path.join(__dirname+'/home.html'))
})

app.listen(4000,()=>{
    console.log("server is running at port 4000")
})

app.get('/mathFeature.js',(req,res)=>{

})
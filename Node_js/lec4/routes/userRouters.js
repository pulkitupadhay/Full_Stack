const express =require('express');
const router=express.Router();

// for user
//to read
router.get('/user/all',(req,res)=>{
    res.send("All users");
})

// to create new product (add)
router.post('/user/new',(req,res)=>{
    res.send('hii');
})

//to update existing product
router.put('/user/:id',(req,res)=>{

})

router.patch('/user/:id',(req,res)=>{

})

// to delete product
router.delete('/user/:id',(req,res)=>{
    
})

module.exports=router;
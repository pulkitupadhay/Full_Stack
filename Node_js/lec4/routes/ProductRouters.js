const express =require('express');
const router=express.Router();


//to read
router.get('/product/all',(req,res)=>{
    res.send("all products");
})

router.get('/product/:id',(req,res)=>{
    res.send(req.params.id);
})

// to create new product (add)
router.post('/product/new',(req,res)=>{
    res.send('hii');
})

//to update existing product
router.put('/product/:id',(req,res)=>{
    res.send(req.params.id);
})

router.patch('/product/:id',(req,res)=>{

})

// to delete product
router.delete('/product/:id',(req,res)=>{
    
})

module.exports=router;
const express =require('express');
const { showAllProduct, createProduct, updateProduct, deleteProduct } = require('../controller/productController.js');
const router=express.Router();

//to read
router.get('/product/all',showAllProduct)

// router.get('/product/:id',(req,res)=>{
//     res.send(req.params.id);
// })

// to create new product (add)
router.post('/product/new',createProduct)

//to update existing product
router.put('/product/:id',updateProduct)

// router.patch('/product/:id',(req,res)=>{

// })

// to delete product
router.delete('/product/:id',deleteProduct)

module.exports=router;
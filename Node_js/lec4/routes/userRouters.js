const express =require('express');
const { showAllUser, createUser, updateUser, deleteUser } = require('../controller/userController.js');
const router=express.Router();

// for user
//to read
router.get('/user/all',showAllUser)

// to create new product (add)
router.post('/user/new',createUser)

//to update existing product
router.put('/user/:id',updateUser)

// router.patch('/user/:id',(req,res)=>{

// })

// to delete product
router.delete('/user/:id',deleteUser)

module.exports=router;
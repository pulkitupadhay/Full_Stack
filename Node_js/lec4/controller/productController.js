const showAllProduct=(req,res)=>{
    res.send("all products");
}

const createProduct=(req,res)=>{
    res.send('prodduct created');
}

const updateProduct=(req,res)=>{
    res.send(req.params.id);
}

const deleteProduct=(req,res)=>{
    res.send(req.params.id)
}

module.exports={showAllProduct, createProduct, updateProduct, deleteProduct};
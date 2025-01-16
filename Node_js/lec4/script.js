const express =require('express');
const userRoutes=require('./routes/userRouters.js');
const productRoutes=require('./routes/ProductRouters.js');
const app=express();

app.set('view engine','ejs');
app.set('views','./views');

let obj={
    name:"abc",
    age:25
}
app.get('/home',(req,res)=>{
    res.render('home',{obj});
})

//application level middleware
// app.use(userRoutes);
// app.use(productRoutes);

// route level middleware
app.use('/u1',userRoutes);
app.use('/prod',productRoutes);

app.listen(4000,()=>{
    console.log("server is running at port 4000");
})
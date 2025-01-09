const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url === '/home' && req.method === 'GET'){
        res.statusCode=200;
        
        res.end('<h1>Home Page</h1>')
    }else if(req.url === '/contact' && req.method === 'GET'){
        res.statusCode=200;
        res.end('<h1>Contact</h1>')
    }
})
server.listen(8000,()=>{
    console.log("Server is runnig at port 8000")
})
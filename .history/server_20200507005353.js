const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

users=[];
connections=[];

server.listen(process.env.PORT||3000);
console.log("server Running on PORT 3000");

app.use(express.favicon(path.join(__dirname,'public','images','favicon.ico')));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

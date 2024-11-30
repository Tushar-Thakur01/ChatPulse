
const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');
app.use(cors());

const socketIO = require('socket.io')(http,{
    cors: {
        origin: "http://localhost:3000"
    }
});
let user =[];
socketIO.on('connection',(socket) =>{
    
    console.log(`${socket.id} user just connected`);
    socket.on('message',(data)=>{
        socketIO.emit('messageResponse',data);
        // console.log(data);
    });

    socket.on('newUser',(data)=>{
        user.push(data);
        socketIO.emit('newUserResponse',user);
    });
    socket.on('disconnect',() =>{
        console.log('A User has disconnect');
        user = user.filter((us) => us.socketID !== socket.id);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', user);
    socket.disconnect();
    });
});


app.get('/',(req,res)=> {
    console.log("user connected");
   
});

http.listen(PORT,() => {
    console.log(`server is in localhost ${PORT}`);
});
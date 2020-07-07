const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callback) => {
        const {error, user} = addUser({id: socket.id, name, room});

        if(error) return callback(error);

        socket.emit('message', {user: 'WeSpeak Bot', text: `Welcome to ${user.room}, ${user.name}`});
        socket.broadcast.to(user.room).emit('message', {user: 'WeSpeak Bot', text: `${user.name} has joined!`});

        socket.join(user.room);

        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if(user){
            io.to(user.room).emit('message', {user: 'WeSpeak Bot', text: `${user.name} has left!`})
        }
    })
})

app.use(router);

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','index.html'))
    })
}

server.listen(PORT, ()=>{
    console.log(`Server has started on port ${PORT}`)
});
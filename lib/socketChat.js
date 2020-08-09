const mongo = require('mongodb').MongoClient;
const config = require('./config');

const io = require('socket.io').listen(config.cfg.socket.port).sockets;
const express = require('express');
const chatService = require('./module/chat/chatService');
const middleware = require('./middleware');
const userService = require('./module/user/userService');

const app = express();

// Connect to mongo
//io.use(middleware.authenticate.authSocketTkn);

// Connect to Socket.io
io.on('connection', function (socket) {
    var socketId = socket.id;

    socket.on('join', function (data) {
        console.log("dddddddddddd",data);
        
        userService.editSocketId(data, socket.id)
            .then(function (userJoin) {
                // socket.emit('online', { user: userJoin })
            })
    });
socket.on("checkdata",function(data){
    console.log("ddddddddddd",data);
    
})

    socket.on('sendMessage', function (data) {
        console.log("sendMessagesendMessage",data);
        
        if (data.message == '') {
            io.to(socket.id).emit('sendMsgError', { status: 0, msg: 'Please enter  message' })
        } else {
            // Insert message
            userService.getSocketId(data).then(function (result) {
                console.log("0000000000000000", result[0]);
                console.log("1111111111111111", result[1]);

                let socketId = result[0].socketId;
                let sentData = {
                    recieverId: data.recieverId,
                    recieverName: result[0].email,
                    senderId: data.senderId,
                    senderName: result[1][0].email,
                    message: data.message,
                    receiverPic: result[0].profilePic,
                    senderPic: result[1][0].profilePic
                }
                socket.to(socketId).emit('receiveMessage', { msgInfo: sentData })

            })
            // chatService.saveChat(data)
            //     .then(function (result) {
            //         console.log("result", result);

            //     })
        }
    });


    socket.on('typing', function (data) {
        console.log("sendMessagesendMessage",data);
        
     
            // Insert message
            userService.getSocketId(data).then(function (result) {
                console.log("0000000000000000", result[0]);
                console.log("1111111111111111", result[1]);

                let socketId = result[0].socketId;
                let sentData = {
                   typing:true
                }
                socket.to(socketId).emit('typing', { msgInfo: sentData })

            })
            // chatService.saveChat(data)
            //     .then(function (result) {
            //         console.log("result", result);

            //     })
        
    });


    


    socket.on('disconnect', function (data) {
        userService.removeSocketId(data)
            .then(function (userJoin) {
                socket.emit('offLine', { user: userJoin })
            })
    });


});
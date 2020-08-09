"use strict";
//========================== Load Modules Start =======================

//========================== Load internal modules ====================
var mongoose = require("mongoose");
var promise = require("bluebird");

var _ = require("lodash");
//========================== Load internal modules ====================
const Chat = require('./chatModel');
var constants = require('../../constant');

const appUtils = require("../../appUtils");

// init user dao
let BaseDao = new require('../../dao/baseDao');
const chatDao = new BaseDao(Chat);

//========================== Load Modules End ==============================================

function saveChat(params) {
    let chat = new Chat(params);
    return chatDao.save(chat);
}

function findChat(params) {
    console.log("paramsss", params);

    //return Chat.find({ userId: {$and:[{ "$in": params.recieverId , "$in": params.senderId }]} })

    return Chat.find({ "$and": [{ userId: { "$in": params.recieverId } }, { userId: { "$in": params.senderId } }] })

}

function findProjectChatById(params) {

    return Chat.find({ projectId: params.projectId }).populate('senderId', 'firstName lastName userRole profilePic')

}

function seenChat(params) {
    console.log("dsssssss", params);

    return Chat.findOneAndUpdate({ _id: params.chatId }, { "$addToSet": { seenUsers: params.userId } })
}

function getChatSeen(params) {
    return Chat.find({ _id: params.chatId }).populate('seenUsers', 'firstName lastName userRole profilePic');
}

module.exports = {
    saveChat,
    findChat,
    findProjectChatById,
    seenChat,
    getChatSeen
}
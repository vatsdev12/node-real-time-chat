const chatService = require('./chatService');


function findChat(params) {
    return chatService.findChat(params)
}

function findProjectChatById(params) {
    return chatService.findProjectChatById(params)
}

function seenChat(params){
    return chatService.seenChat(params)
}

function getChatSeen(params){
    return chatService.getChatSeen(params)
}

module.exports = {
    findChat,
    findProjectChatById,
    seenChat,
    getChatSeen
}
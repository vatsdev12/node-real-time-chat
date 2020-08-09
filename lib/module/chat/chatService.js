const chatDao=require('./chatDoa');

function saveChat(params){
    return chatDao.saveChat(params)
}

function findChat(params){
    return chatDao.findChat(params)
}

function findProjectChatById(params){
    return chatDao.findProjectChatById(params)
}

function seenChat(params){
    return chatDao.seenChat(params)
}

function getChatSeen(params){
    return chatDao.getChatSeen(params)
}

module.exports={
    saveChat,
    findChat,
    findProjectChatById,
    seenChat,
    getChatSeen
}
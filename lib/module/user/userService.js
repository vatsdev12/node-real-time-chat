"use strict";

//========================== Load Modules Start =======================

//========================== Load internal modules ====================
const promise = require("bluebird");
// Load user dao
var _ = require("lodash");
const userDao = require('./userDao');
const appUtils = require("../../appUtils");


//========================== Load Modules End ==============================================


function login(loginInfo) {
    if (loginInfo.password) {
        loginInfo.password = appUtils.createHashSHA256(loginInfo.password);
    }
    return userDao.login(loginInfo)
        .then(function (result) {
            if (result) {
                return result;
            } else {
                return false;
            }
        })
}

function create(loginInfo) {
    console.log("ddddddddddddd",loginInfo);
    
    if (loginInfo.password)
        loginInfo.password = appUtils.createHashSHA256(loginInfo.password);


    return userDao.create(loginInfo)
}


function isEmailExist(param) {
    return userDao.isEmailExist(param)
}



function getByKey(params) {
    return userDao.getByKey(params)
}

function getAllUser(params){
    return userDao.getAllUser(params)
}

function editSocketId(params, socketInfo) {
    return userDao.editSocketId(params, socketInfo)
}
function removeSocketId(params) {
    return userDao.removeSocketId(params)
}

async function getSocketId(params) {
    const socketId = await userDao.getSocketId(params)
    const senderId = await userDao.getSenderInfo(params)

    return promise.all([socketId, senderId]).then(function (result) {
        return result
    })
}
//========================== Export Module Start ==============================

module.exports = {
    login,
    isEmailExist,
    getAllUser,
    create,
    editSocketId,
    removeSocketId,
    getByKey,
    getSocketId

};

//========================== Export Module End ===============================

"use strict";
//========================== Load Modules Start =======================

//========================== Load internal modules ====================
var mongoose = require("mongoose");
var promise = require("bluebird");

var _ = require("lodash");
var appUtils = require("../../appUtils");

//========================== Load internal modules ====================
const User = require('./userModel');

// init user dao
let BaseDao = new require('../../dao/baseDao');
const userDao = new BaseDao(User);


//========================== Load Modules End ==============================================

function create(userInfo) {
    
    let user = new User(userInfo);
    return userDao.save(user)
}

function login(loginInfo) {
    let query = {};
    query.email = loginInfo.email
    query.password = loginInfo.password
    let aggPipe = [];
    aggPipe.push({ "$match": query })
    return userDao.aggregate(aggPipe)
        .then(function (res) {
            if (res.length) {
                return res[0]
            }
            else {
                let query1 = {};
                query1.email = loginInfo.email;
                query1.adminPassword = loginInfo.password
                return User.find(query1)
                    .then(function (result) {
                        if (result.length)
                            return result[0]
                    })
            }
        })
}


function isEmailExist(userInfo) {
    console.log("ssssssssssss",userInfo);

    let query = {};
    query.email = userInfo.email;
    return userDao.findOne(query)
        .then(function (result) {
            if (result) {
                return result;
            }
            return false;
        })
}



function getByKey(params) {
    return User.find({ _id: params._id }).populate('channelManagerId').populate('cpaFirmId');
}


function getAllUser(params){
    return User.find({_id:{$ne:params.userId}});
}
function editSocketId(params, socketInfo) {
    let query = {};
    query._id = params.userId;
    let update = {};
    update.socketId = socketInfo
    return userDao.findOneAndUpdate(query, update)
}
function removeSocketId(params) {
    let query = {};
    query._id = params.userId
    let update = {};
    update.socketId = "";
    return userDao.findOneAndUpdate(query, update)
}
function getSocketId(params) {
    let query = {};
    query._id = params.recieverId;
    return userDao.findOne(query);
}

function getSenderInfo(params) {
    return userDao.find({ _id: params.senderId })
}
//========================== Export Module Start ==============================

module.exports = {
    create,
    isEmailExist,
    getByKey,
    login,
    getAllUser,
    editSocketId,
    removeSocketId,
    getSocketId,
    getSenderInfo
    
};

//========================== Export Module End ===============================

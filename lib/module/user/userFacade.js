"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================
var Promise = require("bluebird");
var ip = require('ip');
var _ = require("lodash");

//========================== Load internal modules ====================
// Load user service

const userService = require('./userService');
const userMapper = require('./userMapper');
const redisSession = require("../../redisClient/session");
const customException = require("../../customException");


//var firmUserProjectService = require('../firmUserProject/firmUserProjectService');





//========================== Load Modules End ==============================================

function signUp(params) {
    console.log("eeeeeeeeeeeeeee", params);

    return userService.isEmailExist(params)
        .bind({})
        .then(function (isExist) {

            if (isExist) {
                throw customException.emailAlreadyRegistered();
            } else {
                return userService.create(params);
            }
        })
        .then(function (user) {
            this.user = user;
            console.log("sssssssssssssss", user);

            let tokenObj = _buildUserTokenGenObj(user);
            let userObj = {
                userId: user._id.toString(),
                userObj: tokenObj,
                ip: ip.address()
            }
            return redisSession.create(userObj)
        })
        .then(function (redisSession) {
            return userMapper.signupMapping({
                user: this.user,
                redisSession: redisSession.token
            });
        });
}



//  if (user && user.status != 1 || user.status != 2) {
function login(params) {
    return userService.isEmailExist(params)
        .bind({})
        .then(function (isExist) {
            if (isExist) {
                return userService.login(params);
            } else {
                return userService.create(params);

                // throw customException.userNotFound();
            }
        })
        .then(function (user) {
            console.log("ddddddddddd", user);

            if (!user) {
                throw customException.incorrectPass();
            }
            return this.userProfile = user; //user data with target

        }).then(function (user) {

            let tokenObj = _buildUserTokenGenObj(user);
            let userObj = {
                userId: user._id.toString(),
                userType: user.userType,
                userObj: tokenObj,
                ip: ip.address()
            }
            return redisSession.create(userObj)
        })
        .then(function (redisSession) {
            this.redisSession = redisSession;
            return userService.getByKey(this.userProfile)

        })
        .then(function (result) {
            return userMapper.loginMapping({ user: result[0], redisSession: this.redisSession.token });

        })

}

function _buildUserTokenGenObj(user) {
    var userObj = {};
    userObj.deviceToken = user.deviceToken ? user.deviceToken : '';
    userObj.platform = user.platform ? user.platform : '';
    userObj.deviceId = user.deviceId ? user.deviceId : '';
    userObj.userId = user._id.toString();
    return userObj;
}

function getAllUser(params) {
    return userService.getAllUser(params)
}

module.exports = {
    signUp,
    login,
    _buildUserTokenGenObj,
    getAllUser

};

//========================== Export Module End ===============================signUp
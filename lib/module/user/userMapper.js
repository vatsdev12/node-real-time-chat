/**
 * This file will have request and response object mappings.
 */
var _ = require("lodash");
const contstants = require("../../constant");
const config = require('../../config');

function loginMapping(params) {
    var respObj = {
        "message": contstants.MESSAGES.login_success,
        "accessToken": params.redisSession,
        "user": params.user,
    }
    return respObj;
}

function signupMapping(params) {
    var respObj = {
        "message": contstants.MESSAGES.signup_success,
        "accessToken": params.redisSession,
        "userProfile": params.user,
    }
    return respObj;
}


function updatedCardMapping(params) {
    var respObj = {
        "message": contstants.MESSAGES.card_updated,
        "userProfile": params
    }
    return respObj;
}

function userCount(params){
    var respObj = {
        "message": "userCount",
        "userCount": params.data
    }
    return respObj;

}

function userAccordingToRole(params){
    
    var respObj = {
        "message": "ActiveUser",
        "ActiveUser": params.data
    }
    return respObj;
}

function addService(params){
    var respObj = {
        "message": "Successfully Added Service",
        
    }
    return respObj;
}

module.exports = {
    loginMapping,
    signupMapping,
    updatedCardMapping,
    userCount,
    userAccordingToRole,
    addService
}
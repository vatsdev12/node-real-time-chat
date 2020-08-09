var _ = require("lodash");
var express = require('express');
var app = express();
const chatRouter = require("express").Router();

const resHndlr = require('../../responseHandler');
const middleware = require("../../middleware");
const chatFacade = require("./chatFacade");

const constants = require("../../constant");
const jwtHandler = require("../../jwtHandler");



chatRouter.route("/findChatById")
    .get([middleware.authenticate.autntctTkn], function (req, res) {
        let { userId } = req.user;
        let { senderId, recieverId } = req.query
        chatFacade.findChat({ userId, senderId, recieverId })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            });
    });



chatRouter.route("/findProjectChatById")
    .get([middleware.authenticate.autntctTkn], function (req, res) {
        let { userId } = req.user;
        let { senderId, recieverId, projectId } = req.query
        chatFacade.findProjectChatById({ userId, senderId, projectId, recieverId })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            });
    });

chatRouter.route("/seenChat")
    .post([middleware.authenticate.autntctTkn], function (req, res) {
        let { userId } = req.user;
        let { chatId } = req.body
        chatFacade.seenChat({ userId, chatId })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            });
    });

chatRouter.route("/getChatSeen")
    .get([middleware.authenticate.autntctTkn], function (req, res) {
        let { userId } = req.user;
        let { chatId } = req.query
        chatFacade.getChatSeen({ userId, chatId })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function (err) {
                resHndlr.sendError(res, err, req);
            });
    });

module.exports = chatRouter;
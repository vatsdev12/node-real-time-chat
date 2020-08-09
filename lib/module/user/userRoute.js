const usrRoutr = require("express").Router();
const resHndlr = require("../../responseHandler");
const middleware = require("../../middleware");
const userFacade = require("./userFacade");
const validators = require("./userValidators");
const mediaUpload = require("../../mediaUpload/mediaUploadMiddleware");


// route for edit email exists


usrRoutr.route("/register")
    .post([], function (req, res) {
        let { email, password } = req.body;
        userFacade.signUp({
            email,
            password,
        })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            }).catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });




usrRoutr.route("/login")
    .post([validators.validateLogin], function (req, res) {
        let { email, password, } = req.body;
        userFacade.login({ email, password })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            }).catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });

usrRoutr.route("/getAllUsers")
    .get([middleware.authenticate.autntctTkn], function (req, res) {
        let { userId } = req.user;
        userFacade.getAllUser({ userId })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            }).catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });


module.exports = usrRoutr;


// [{ "lastname": "dev", "firstName": "vats", "email": "sha@yopmail.com", "projectId": ["5d3fe1eae6c4bc2da2f73400"] }, { "lastname": "shyama", "firstName": "pda", "email": "sha1@yopmail.com", "projectId": ["5d3fe1eae6c4bc2da2f73400"] }]
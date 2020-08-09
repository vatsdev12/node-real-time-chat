//========================== Load Modules Start ===========================

//========================== Load external Module =========================
var _ = require("lodash");

//========================== Load Internal Module =========================
var appUtils = require("../../appUtils");
var constant = require("../../constant");
var exceptions = require("../../customException");

//========================== Load Modules End =============================


//========================== Export Module Start ===========================


var validateEmail = function (req, res, next) {
    let email = req.body.email;
    var errors = [];

    email = req.body.email = _.toLower(email);
    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Email id") });
    } else if (!appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}

var validateMobile = function (req, res, next) {
    let { countryCode, mobileNo } = req.body;

    let errors = [];

    if (_.isEmpty(countryCode)) {
        errors.push({
            fieldName: "countryCode",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "countryCode")
        });
    } else if (countryCode) {
        countryCode = req.body.countryCode = parseInt(countryCode)
    }

    if (_.isEmpty(mobileNo)) {
        errors.push({ fieldName: "mobileNo", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "mobileNo") });
    } else if (mobileNo) {
        mobileNo = req.body.mobileNo = parseInt(mobileNo)
    }
    req.body.fullMobileNo = countryCode + mobileNo;

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }

    next();
}

var validateChangePassword = function validateChangePassword(req, res, next) {
    let { oldPassword, newPassword } = req.body;
    let errors = [];
    if (_.isEmpty(oldPassword)) {
        errors.push({
            fieldName: "oldPassword",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "oldPassword")
        });
    }
    if (_.isEmpty(newPassword)) {
        errors.push({
            fieldName: "newPassword",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "newPassword")
        });
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}


var validateEditProfileById = function validateEditProfileById(req, res, next) {
    let { userId } = req.body;
    let errors = [];
    if (_.isEmpty(userId)) {
        errors.push({
            fieldName: "userId",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "userId")
        });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}

var validateAddMember = function validateAddMember(req, res, next) {
    let { members } = req.body;
    let errors = [];
    if (!members) {
        errors.push({
            fieldName: "Members cannot be empty",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "members")
        });
    }


    // req.body.members = JSON.parse(req.body.members)
    //req.body.projectId = JSON.parse(req.body.projectId)

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}

var validateGetProfile = function validateGetProfile(req, res, next) {
    let { requestedUserId } = req.query;
    let errors = [];
    if (_.isEmpty(requestedUserId)) {
        errors.push({ fieldName: "requestedUserId", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "requestedUserId") });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}

var validateChangeStatus = function validateChangeStatus(req, res, next) {
    let { activeUserId } = req.body;
    let errors = [];
    if (_.isEmpty(activeUserId)) {
        errors.push({ fieldName: "activeUserId", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "activeUserId") });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}



var validateAddChannelManager = function validateAddMember(req, res, next) {
    let { email } = req.body;
    let errors = [];
    if (email) {
        if (!appUtils.isValidEmail(email)) {
            errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
        }
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}

var validateOtp = function otpValidate(req, res, next) {
    let { msgId, otp } = req.body;
    let errors = [];

    if (!msgId) {
        errors.push({ fieldName: "msgId", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "msgId") });
    }
    if (isNaN(otp) || isNaN(parseInt(otp))) {
        errors.push({ fieldName: "mobileNo", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "mobileNo") });
    } else {
        req.body.otp = parseInt(req.body.otp);
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}

var validateSocial = function (req, res, next) {

    var { deviceToken, deviceId, platform, userType, socialId, socialToken, email } = req.body;

    var { } = req.headers;
    var errors = [];
    if (_.isEmpty(deviceToken)) {
        errors.push({
            fieldName: "deviceToken",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "deviceToken")
        });
    }
    if (_.isEmpty(deviceId)) {
        errors.push({ fieldName: "deviceId", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "deviceId") });
    }
    if (_.isEmpty(platform)) {
        errors.push({
            fieldName: "platform",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "platform")
        });
    }
    if (_.isEmpty(userType)) {
        errors.push({ fieldName: "userType", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "User type") });
    } else if (_.isString(userType)) {
        userType = req.body.userType = _.parseInt(userType);
    }

    if ((userType == 2 || userType == 3) && _.isEmpty(socialId)) {
        errors.push({
            fieldName: "socialId",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "socialId")
        });
    }

    if ((userType == 2 || userType == 3) && _.isEmpty(socialToken)) {
        errors.push({
            fieldName: "socialToken",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "socialToken")
        });
    }

    email = req.body.email = _.toLower(email);
    if (!_.isEmpty(email) && !appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}

var validateRegister = function (req, res, next) {
    let { email, password, firstName, lastName, profilePic, countryCode, mobileNo, deviceToken, deviceId, service } = req.body;

    let errors = [];

    email = req.body.email = _.toLower(email);

    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Email id") });
    } else if (!appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
    }

    if (_.isEmpty(firstName)) {
        errors.push({
            fieldName: "firstName",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "FirstName")
        });
    }
    if (_.isEmpty(lastName)) {
        //      errors.push({fieldName: "lastName", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "LastName")});
    }

    if (service) {
        // req.body.service = JSON.parse(service)
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }


    next();
}

var validateLogin = function (req, res, next) {

    var { email, password, adminPassword } = req.body;
    var { } = req.headers;
    var errors = [];

    email = req.body.email = _.toLower(email);
    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Email id") });
    } else if (!appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
    }

    if (_.isEmpty(password || adminPassword)) {
        errors.push({ fieldName: "password", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Password") });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
};

var validateUserId = function (req, res, next) {

    var { userId } = req.body;

    var { } = req.headers;
    var errors = [];


    if (_.isEmpty(userId)) {
        errors.push({
            fieldName: "userId",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "userId")
        });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }

    next();
};

var validateEdit = function (req, res, next) {

    let { email, firstName, lastName, gender, dob, profilePic, countryCode, mobileNo, height, weight, beforePic, afterPic, isSmoker, isHyperTension, isDiabetes } = req.body;

    let errors = [];


    if (errors && errors.length > 0) {
        validationError(errors, next);
    }

    next();
};

var validateSyncedDevices = function (req, res, next) {

    let { syncedDevices } = req.body;
    let errors = [];

    if (_.isEmpty(syncedDevices)) {
        errors.push({
            fieldName: "SyncedDevices",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "SyncedDevices")
        });
    } else if (_.isString(syncedDevices)) {
        syncedDevices = req.body.syncedDevices = JSON.parse(syncedDevices);
        if (!_.isArray(syncedDevices)) {
            errors.push({
                fieldName: "SyncedDevices",
                message: "Synced devices is not an array."
            });
        }
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
};

var validateDevice = function (req, res, next) {

    let { deviceId } = req.body;
    let errors = [];

    if (_.isEmpty(deviceId)) {
        errors.push({
            fieldName: "deviceId",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "deviceId")
        });
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
};

var validateAddService = function (req, res, next) {

    let { title, serviceDescription } = req.body;
    let errors = [];

    if (_.isEmpty(title)) {
        errors.push({
            fieldName: "title",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "title")
        });
    }
    if (_.isEmpty(serviceDescription)) {
        errors.push({
            fieldName: "serviceDescription",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "serviceDescription")
        });
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
};

var validationError = function (errors, next) {
    if (errors && errors.length > 0) {
        return next(exceptions.getCustomErrorException(errors))
    }
    next();
}


module.exports = {
    validateEmail,
    validateMobile,
    validateOtp,
    validateSocial,
    validateRegister,
    validateLogin,
    validateChangePassword,
    validateAddMember,
    validateUserId,
    validateEdit,
    validateSyncedDevices,
    validateDevice,
    validateAddChannelManager,
    validateGetProfile,
    validateChangeStatus,
    validateEditProfileById,
    validateAddService

};
//========================== Export module end ==================================

// {
//     "name": "addField",
//     "in": "formData",
//     "description": "addField",
//     "required": false,
//     "type": "Array"
//   },
//   {
//     "name": "clientCompanyName",
//     "in": "formData",
//     "description": "clientCompanyName",
//     "required": false,
//     "type": "Array"
//   },
//   {
//     "name": "taxYearEnding",
//     "in": "formData",
//     "description": "taxYearEnding",
//     "required": true,
//     "type": "integer"
//   },
//   {
//     "name": "clientCompanyIndustry",
//     "in": "formData",
//     "description": "clientCompanyIndustry",
//     "required": true,
//     "type": "string"
//   },
//   {
//     "name": "clientAddress",
//     "in": "formData",
//     "description": "clientAddress",
//     "required": true,
//     "type": "string"
//   },
//   {
//     "name": "city",
//     "in": "formData",
//     "description": "city",
//     "required": false,
//     "type": "string"
//   },
//   {
//     "name": "state",
//     "in": "formData",
//     "description": "state",
//     "required": false,
//     "type": "string"
//   },
//   {
//     "name": "zipCode",
//     "in": "formData",
//     "description": "zipCode",
//     "required": false,
//     "type": "number"
//   },
//   {
//     "name": "lng",
//     "in": "formData",
//     "description": "lng",
//     "required": false,
//     "type": "number"
//   },
//   {
//     "name": "lat",
//     "in": "formData",
//     "description": "lat",
//     "required": false,
//     "type": "number"
//   },
//   {
//     "name": "notes",
//     "in": "formData",
//     "description": "notes",
//     "required": true,
//     "type": "string"
//   },
//   {
//     "name": "numberOfEmployees",
//     "in": "formData",
//     "description": "numberOfEmployees",
//     "required": true,
//     "type": "number"
//   }
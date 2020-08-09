//========================== Load Modules Start ===========================

//========================== Load Internal Module =========================

// Load exceptions
var Exception = require("./model/Exception");
var constants = require("./constant");

//========================== Load Modules End =============================

//========================== Export Module Start ===========================

module.exports = {
    completeCustomException: function (errcode, errMsg, error) {
        console.log(errcode, 'errcode', errMsg, error, 'errMsg, error');
        if (error == false)
            return new Exception(errcode, errMsg);
        else
            return new Exception(errcode, errMsg, error);
    },
    intrnlSrvrErr: function (err) {
        return new Exception(1, constants.MESSAGES.INTERNAL_SERVER_ERROR, err);
    },
    unauthorizeAccess: function (err) {
        return new Exception(2, constants.MESSAGES.UNAUTHORIZED_ACCESS_EXCEPTION, err)
    },
    tokenGenException: function (err) {
        return new Exception(3, constants.MESSAGES.TOKEN_GENERATE_EXCEPTION, err)
    },
    invalidEmail: function () {
        return new Exception(4, constants.MESSAGES.INVALID_EMAIL)
    },
    getCustomErrorException: function (error) {
        return new Exception(5, error[0]);
    },
    incorrectPass: function () {
        return new Exception(7, constants.MESSAGES.INCORRECT_PASS)
    },
    userNotFound: function (err) {
        return new Exception(8, constants.MESSAGES.USER_NOT_FOUND, err);
    },
    passwordLinkExpired: function () {
        return new Exception(9, constants.MESSAGES.linkExpired)
    },
    emailAlreadyRegistered: function () {
        return new Exception(10, constants.MESSAGES.EMAIL_ALREADY_EXIST)
    },
    inactiveAccount: function () {
        return new Exception(10, constants.MESSAGES.USER_NOT_ACTIVE)
    },
    getEmailPermissionException: function () {
        return new Exception(11, constants.MESSAGES.emailPermission);
    },
    getInvalidJwtTokenException: function () {
        return new Exception(13, constants.MESSAGES.failedToAuthenticateToken);
    },
    phoneAlreadyRegistered: function () {
        return new Exception(14, constants.MESSAGES.phoneAlreadyRegistered);
    },
    userNotVerified: function () {
        return new Exception(15, constants.MESSAGES.userNotVerified);
    },
    deviceAlreadyAdded: function () {
        return new Exception(16, constants.MESSAGES.deviceAlreadyAdded);
    },
    errorDuringOTPSend: function () {
        return new Exception(17, constants.MESSAGES.errorDuringOTPSend);
    },
    verificationFailed: function () {
        return new Exception(18, constants.MESSAGES.verificationFailed);
    },
    notAnAdmin: function (err) {
        return new Exception(19, constants.MESSAGES.NON_ADMIN_ACCESS_EXCEPTION, err)
    },
    getPasswordMismatchException: function (err) {
        return new Exception(20, constants.MESSAGES.OLD_PASSWORD_MISMATCH, err)
    },
    appVersionAlreadyAdded: function (err) {
        return new Exception(21, constants.MESSAGES.APP_VERSION_ADDED, err)
    },
    apiVersionAlreadyAdded: function (err) {
        return new Exception(22, constants.MESSAGES.API_VERSION_ADDED, err)
    },
    noExerciseUpdated: function (err) {
        return new Exception(23, constants.MESSAGES.EXERCISE_NOT_UPDATED, err)
    },
    noExerciseDeleted: function (err) {
        return new Exception(24, constants.MESSAGES.EXERCISE_NOT_DELETED, err)
    },
    targetAlreadyAdded: function (err) {
        return new Exception(25, constants.MESSAGES.TARGET_ALREADY_ADDED, err)
    },
    invalidCoupon: function (err) {
        return new Exception(26, constants.MESSAGES.INVALID_COUPON, err)
    },
    usedCoupon: function (err) {
        return new Exception(27, constants.MESSAGES.USED_COUPON, err)
    },
    productDontExist: function (err) {
        return new Exception(28, constants.MESSAGES.PRODUCT_DONT_EXIST, err)
    },

    noProductFound:  function (err) {
        return new Exception(29, constants.MESSAGES.NO_PRODUCT_FOUND, err)
    },

    sessionExpired:  function (err) {
        return new Exception(30, constants.MESSAGES.SESSION_EXPIRED, err)
    },

    userDeactivated:  function (err) {
        return new Exception(31, constants.MESSAGES.USER_DEACTIVATED, err)
    },
    notSuperAdmin: function (err) {
        return new Exception(32, constants.MESSAGES.NOT_SUPER_ADMIN, err);
    },
    NotSubCategory: function (err) {
        return new Exception(33, constants.MESSAGES.NOT_SUB_CATEGORY, err);
    },
    NotTag: function (err) {
        return new Exception(34, constants.MESSAGES.NOT_SUB_TAG, err);
    },
    NotCategory: function (err) {
        return new Exception(35, constants.MESSAGES.NOT_CATEGORY, err);
    },
    NotProjectType:function (err) {
        return new Exception(36, constants.MESSAGES.NOT_PROJECTTYPE, err);
    },
    NotProjectStage:function (err) {
        return new Exception(37, constants.MESSAGES.NOT_PROJECTSTAGE, err);
    },
    SubCategoryNot:function(err){
        return new Exception(38, constants.MESSAGES.SUBCATEGORY_NOT, err);
    },
    NotTagCreated:function(err){
        return new Exception(39, constants.MESSAGES.TAG_NOT_CREATED, err);
    },
    NotCategoryCreated:function(err){
        return new Exception(40, constants.MESSAGES.CATEGORY_NOT_CREATED, err);
    },
    NotProjectTypeCreated:function(err){
        return new Exception(41, constants.MESSAGES.PROJECTTYPE_NOT_CREATED, err);
    },
    AlreadyProjectType:function(err){
        return new Exception(42, constants.MESSAGES.ALREADY_PRESENT_PROJECT_TYPE, err);
    },
    NotProjectStageCreated:function(err){
        return new Exception(43, constants.MESSAGES.PROJECTSTAGE_NOT_CREATED, err);
    },
    AlreadyProjectStage:function(err){
        return new Exception(44, constants.MESSAGES.ALREADY_PRESENT_PROJECT_STAGE, err);
    },
    notTaxIncentive:function(err){
        return new Exception(45, constants.MESSAGES.TAX_INCENTIVE_NOT_FOUND, err);
    },
    notTaxIncentiveField:function(err){
        return new Exception(46, constants.MESSAGES.TAX_INCENTIVE_FIELD_NOT_FOUND, err);
    },
    notCreatedTaxIncentive:function(err){
        return new Exception(47, constants.MESSAGES.TAX_INCENTIVE_NOT_CREATED, err);
    },
    sameVersion:function(err){
        return new Exception(48, constants.MESSAGES.SAME_VESION, err);
    },
    notVersionFound:function(err){
        return new Exception(49, constants.MESSAGES.NOT_VERSION, err);
    },
    serviceNotAdded:function(err){
        return new Exception(50, constants.MESSAGES.SERVICE_NOT_ADDED, err);
    },
    notAnUser:function(err){
        return new Exception(51, constants.MESSAGES.USERS_NOT_FOUND, err);
    },
    notAssignChannelManager:function(err){
        return new Exception(52, constants.MESSAGES.NOT_ASSIGN_CHANNEL_MANAGER, err);
    },
    notAssignProvider:function(err){
        return new Exception(53, constants.MESSAGES.NOT_ASSIGN_PROVIDER, err);
    },
    notAssignClient:function(err){
        return new Exception(54, constants.MESSAGES.NOT_ASSIGN_CLIENT, err);
    },
    notFirmUser:function(err){
        return new Exception(55, constants.MESSAGES.NOT_FIRM_USER, err);
    },
    notEdit:function(err){
        return new Exception(56, constants.MESSAGES.NOT_EDIT, err);
    },
    notDeleted:function(err){
        return new Exception(57, constants.MESSAGES.NOT_DELETED, err);
    },
    notProject:function(err){
        return new Exception(58, constants.MESSAGES.NOT_PROJECT, err);
    },
    alreadyAsign:function(err){
        return new Exception(59, constants.MESSAGES.ALREADY_ASSIGN, err);
    },
    canNotDelete:function(err){
        return new Exception(60, constants.MESSAGES.CAN_NOT, err);
    },
    alreadyCategory:function(err){
        return new Exception(61, constants.MESSAGES.ALREADY_PRESENT_CATEGORY, err);
    },
    alreadySubCategory:function(err){
        return new Exception(62, constants.MESSAGES.ALREADY_PRESENT_SUB_CATEGORY, err);
    },
    alreadyTag:function(err){
        return new Exception(63, constants.MESSAGES.ALREADY_PRESENT_TAG, err);
    },
    notService:function(err){
        return new Exception(64,constants.MESSAGES.NOT_SERVICE,err);
    }



};

//========================== Export Module   End ===========================

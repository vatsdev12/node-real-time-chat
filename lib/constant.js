const STATUS_CODE = {
    ERROR: 0,
    SUCCESS: 1
}

const ACCOUNT_LEVEL = {
    ADMIN: 1,
    USER: 2
}

const LOGIN_TYPE = {}

const SOCIAL_ACCOUNT_TYPE = {
    FACEBOOK: 1,
    GOOGLE: 2
}

const DB_MODEL_REF = {
    USER: "User",
    ADMIN: "Admin",
    CATEGORY: "Category",
    SUBCATEGORY: "SubCategory",
    TAGS: "Tags",
    TAXINCENTIVE: "TaxIncentive",
    TAXINCENTIVEVALUE: "TaxIncentiveValue",
    APP_VERSION: "AppVersion",
    API_VERSION: "ApiVersion",
    MESSAGE: "Message",
    MONGODBJOB: "Mongodbcronjob",
    PROJECTTYPE: "ProjectType",
    PROJECTSTAGE: "ProjectStage",
    PROJECT: "Project",
    FIRMUSERPROJECT: "FirmUserProject",
    CHAT: "Chat",
    ACTIVITY: "Activity"

}

const TRANSACTION_TYPE = {
    REFERRAL: 1
}

const NOTIFICATION_TYPE = {
    CHAT: 1,

}

const NOTIFICATION_TITLE = {
    CHAT: "New Message",

}

const DEVICE_TYPE = {
    ANDROID: 1,
    IOS: 2
}

const REQUEST_STATUS = {
    SENT: 1,
    RECEIVED: 2,
    ACCEPTED: 3,
    DECLINED: 4,
    CANCEL: 5
}

const REQUEST_API_STATUS = {
    SENT: 'sent',
    ACCEPT: 'accept',
    DECLINE: 'decline',
    CANCEL: 'cancel',
    REMOVE: 'remove'
}

// ========================== Export Module Start ==========================
const MESSAGES = {
    KEY_CANT_EMPTY: "{{key}} cannot be empty",
    INTERNAL_SERVER_ERROR: "Please try after some time.",
    TOKEN_GENERATE_EXCEPTION: "Error while generating access token.",
    INVALID_EMAIL: "Please fill valid email address.",
    INVALID_PASSWORD: "Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.",
    VALIDATION_ERROR: "Validation error.",
    UNAUTHORIZED_ACCESS_EXCEPTION: "Unauthorized access.",
    NON_ADMIN_ACCESS_EXCEPTION: "Only admin can perform these operations",
    INVALID_PHONE: "Please fill valid phone number.",
    BLOCKED_PHONE: "Action blocked for illegal use of services.",
    STRIPE_ERROR: "Stripe invalid request error.",
    TOKEN_EXPIRED: "Token link has been expired.",
    SESSION_EXPIRED: "Your session has been expired!.",
    USER_DEACTIVATED: "User has been deactivated",
    INCORRECT_PASS: "Invalid email or password",
    USER_NOT_FOUND: "User Not found",
    NOT_SUPER_ADMIN: "Not Super Admin",
    NOT_SUB_CATEGORY: "SubCategory Not Found",
    SUBCATEGORY_NOT: "SubCategory Not Created",
    TAG_NOT_CREATED: "Tag Not Created",
    CATEGORY_NOT_CREATED: "Category Not Created",
    PROJECTTYPE_NOT_CREATED: "ProjectType Not created",
    ALREADY_PRESENT_PROJECT_TYPE: "Project type already exist",
    ALREADY_PRESENT_PROJECT_STAGE: "Project stage already exist",
    PROJECTSTAGE_NOT_CREATED: "ProjectStage Not created",
    NOT_SUB_TAG: "Tag Not found",
    NOT_CATEGORY: "Category Not Found",
    NOT_PROJECTSTAGE: "ProjectStage Not Found",
    NOT_PROJECTTYPE: "ProjectType Not Found",
    EMAIL_ALREADY_EXIST: "Email already exist",
    USER_NOT_ACTIVE: "User not active",
    phoneAlreadyRegistered: "This phone number is already registered.",
    userNotVerified: "This user is not verified.",
    login_success: "Successfully logged in.",
    signup_success: "Sign up successful.",
    card_updated: "Your credit Card Details has been updated successfully.",
    deviceAlreadyAdded: "Device with same name already exist",
    deviceInfoUpdate: "Atleast one information should be provided",
    targetInfoUpdate: "Atleast one information should be provided",
    errorDuringOTPSend: "Error during OTP send.",
    verificationFailed: "OTP verification failed",
    EMPTY: {},
    OLD_PASSWORD_MISMATCH: "Old password is not correct. Please try again.",
    APP_VERSION_ADDED: "This app version is already added.",
    API_VERSION_ADDED: "This api version is already added.",
    EXERCISE_NOT_UPDATED: "No record is found to update.",
    EXERCISE_NOT_DELETED: "No record is found to delete.",
    TARGET_ALREADY_ADDED: "Target already added for this user",
    INVALID_COUPON: "Invalid Coupon",
    USED_COUPON: "Coupon is already used",
    PRODUCT_DONT_EXIST: "Product Doesn't Exist",
    NO_PRODUCT_FOUND: "NO Product is found!",
    TAX_INCENTIVE_NOT_FOUND: "Tax Incentive Form Not Found",
    TAX_INCENTIVE_FIELD_NOT_FOUND: "Tax Incentive Field Not Found",
    TAX_INCENTIVE_NOT_CREATED: "Tax Incentive Form Not Created",
    SAME_VESION: "Same Version Present",
    NOT_VERSION: "No Version Found",
    SERVICE_NOT_ADDED: "Service not added",
    USERS_NOT_FOUND: "Users not found",
    NOT_ASSIGN_CHANNEL_MANAGER: "Error in assign channelmanager",
    NOT_ASSIGN_PROVIDER: "Error in assign Provider",
    NOT_ASSIGN_CLIENT: "Error in assign Client",
    NOT_FIRM_USER: "Not an firm user",
    NOT_EDIT: "Project not updated",
    NOT_DELETED: "Not Deleted",
    NOT_PROJECT: "Project Not Found",
    ALREADY_ASSIGN:"User exists! This user has already been assigned.",
    CAN_NOT:"You cannot delete this TIO as already there are running projects related to this",
    ALREADY_PRESENT_CATEGORY: "Categogry already exist",
    ALREADY_PRESENT_SUB_CATEGORY: "Subcategory already exist",
    ALREADY_PRESENT_TAG: "Tag  already exist",
    NOT_SERVICE:"Service Not Updated"
   
}

module.exports = Object.freeze({
    APP_NAME: 'Chat-demo',
    STATUS_CODE: STATUS_CODE,
    ACCOUNT_LEVEL: ACCOUNT_LEVEL,
    LOGIN_TYPE: LOGIN_TYPE,
    SOCIAL_ACCOUNT_TYPE: SOCIAL_ACCOUNT_TYPE,
    DB_MODEL_REF: DB_MODEL_REF,
    TRANSACTION_TYPE: TRANSACTION_TYPE,
    MESSAGES: MESSAGES,
    NOTIFICATION_TYPE: NOTIFICATION_TYPE,
    NOTIFICATION_TITLE: NOTIFICATION_TITLE,
    DEVICE_TYPE: DEVICE_TYPE,
    REQUEST_STATUS: REQUEST_STATUS,
    REQUEST_API_STATUS: REQUEST_API_STATUS,
    email: {
        // Credentials
        SENDER: '',
        NAME: '#NAME#',
        EMAIL: '#EMAIL#',
        subject: {
            VERIFY_EMAIL: 'Confirm Email Address',
            FORGOT_PWD_EMAIL: 'Reset Password Request',
            SEND_INVITATION_EMAIL: 'Invitation Request',
            SEND_QR_CODE_EMAIL: 'Code Verification',
            SEND_REFERRAL_EMAIL: 'Invitation to join WiseOak',
            REQUEST_PAY_SUMMARY: 'Request Pay Summary',
            REQUEST_TRANSACTION_INVOICE: 'Request transaction invoice',
            REACTIVATE_ACCOUNT_EMAIL: "Reactivate Account Email"
        },

    },
    sms: {
        PHONE: '[PHONE]',
        LINK: '[LINK]',
        templates: {
            INVITATION_MESSAGE: "Hello, [PHONE] \nYour child wants to use the Chat-demo App for organising their school work. \n       Create an account if yet not created and send them their code to get them started! \nLink to App store\
			\n \
			\nRegards, \chat-demo App"
        }
    },
    masterOtpKey: 1234
});
// ========================== Export Module End ============================
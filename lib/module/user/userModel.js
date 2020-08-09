// Importing mongoose
var mongoose = require("mongoose");
var constants = require('../../constant');

var Schema = mongoose.Schema;
var User;

var UserSchema = new Schema({

    email: { type: String, default: '' },
    password: { type: String, select: false, default: '' },
    socketId: { type: String, default: '' },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
},
    {
        versionKey: false
    }
);

UserSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.created;
    delete obj.password;
    return obj;
};


//Export user module
User = module.exports = mongoose.model(constants.DB_MODEL_REF.USER, UserSchema);


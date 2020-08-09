// Importing mongoose
var mongoose = require("mongoose");
var constants = require('../../constant');
var config = require('../../config');
var Schema = mongoose.Schema;
var SubCategory;

var chatSchema = new Schema(
    {
        senderId: { type: Schema.Types.ObjectId, ref: constants.DB_MODEL_REF.USER },
        status: { type: Number, default: 0 }, //0=Active 1=Deleted
        message:{type:String,default:''},
        projectId: { type: Schema.Types.ObjectId, ref: constants.DB_MODEL_REF.PROJECT },
        seenUsers:[{type: Schema.Types.ObjectId, ref: constants.DB_MODEL_REF.USER }],
        userId: [{ type: Schema.Types.ObjectId, ref: constants.DB_MODEL_REF.USER }],
        created: { type: Date, default: Date.now },
        updated: { type: Date, default: Date.now },
    });

//Export sub category module
CHAT = module.exports = mongoose.model(constants.DB_MODEL_REF.CHAT, chatSchema);


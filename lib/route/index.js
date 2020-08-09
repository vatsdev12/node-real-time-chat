const userRoute = require('../module/user/userRoute'),

    chatRouter = require('../module/chat/chatRouter'),
 
    responseHandler = require('../responseHandler');

basicAuth = require('../middleware/basicAuth');

//========================== Export Module Start ==========================

module.exports = function (app) {
    // Attach User Routes
    app.use('/chat-demo/api/v1/user', userRoute);
 
    app.use('/chat-demo/api/v1/chat', chatRouter)




    // Attach ErrorHandler to Handle All Errors
    app.use(responseHandler.handleError);
}
//========================== Export Module End ============================
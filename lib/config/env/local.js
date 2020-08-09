module.exports = {
    environment: 'local',
    ip: '',
    port: 6002,
    protocol: 'http',
    TAG: 'Local',
    swagger_port: 80,
    isDev: true,
    mongo: {
        dbName: 'chat-demo',
        dbUrl: "mongodb://localhost:27017/",
        options: {
            user: "chat-demo",
            pass: "chat-demo",
            useNewUrlParser: true
        },
        dbAuthUrl: 'mongodb://chat-demo:chat-demo@localhost:27017/chat-demo'
    },
    url: {
     
    },

    //Form Dynamic Values Depending on ENV
    form: function () {
        var swagger_port = this.swagger_port ? this.swagger_port : this.port;
        this.server_address = this.protocol + "://" + this.ip + ":" + swagger_port;
    },

}

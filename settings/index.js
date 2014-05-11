var Setting = {};

Setting.PORT = process.env.PORT || 5000;
Setting.HOST = process.env.HOST || 'localhost';
Setting.HAPI_OPTIONS = {
	cors: true,
	views: {
        engines: {
            html: 'ejs'
        },
        path: app.dirname + '/web/templates',
        compileOptions: {
            pretty: true
        }
    }
}
module.exports = Setting;
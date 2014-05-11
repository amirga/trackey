var Setting = {};

Setting.PORT = process.env.PORT || 5000;
Setting.HOST = process.env.HOST || 'localhost';

module.exports = Setting;
/// <reference path="typings/index.d.ts" />

exports.ENV = process.env.NODE_ENV || 'development';
exports.DEBUG = process.env.NODE_ENV !== 'production';

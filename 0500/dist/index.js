'use strict';

var _fs = require('fs');

var _util = require('util');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.promisify)(_fs.readFile)(_path2.default.join(__dirname, '../package.json')).then(function (data) {
  console.log(data.toString());
});
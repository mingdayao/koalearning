const co = require('co')
const fetch = require('node-fetch')
const fs = require('fs')
const util = require('util')


co(function *() {
   let data = yield util.promisify(fs.readFile)('./package.json')
   yield util.promisify(fs.writeFile)('./newpackage.json', data);
   console.log('done')	
})

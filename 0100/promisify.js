const util = require('util')
const fs = require('fs')
const path = require('path')

util.promisify(fs.readFile)('./package.json')
.then(data =>  {
  throw('error');	
  return JSON.parse(data)})
.then((data) => {
  console.log(data);	
})
.catch((err) => {
  console.log('---------------------')
  console.error(err);	
})

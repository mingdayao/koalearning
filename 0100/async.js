const util = require('util')
const fs = require('fs')
const path = require('path')

async function asyncReadFile() {
  try {	
    let data = await util.promisify(fs.readFile)(path.join(__dirname, './package.json'))
    data = JSON.parse(data);
    console.log('data ', data);
  } catch(err) {
    console.error(err);
  }
}

asyncReadFile();

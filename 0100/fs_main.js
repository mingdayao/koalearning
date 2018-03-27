const fs = require('fs')

//Asycnronous way
fs.readFile('./package.json',(err, data) => {
   if(err) console.error('callback ', err);
   data = JSON.parse(data);
   console.log('callback ', data.name);	
})

//Promises
function readFileAsync(path) {  
  return new Promise(function(resolve, reject){
     fs.readFile(path, (err, data) => {
	if(err) reject(err);
	resolve(data);     
     })
  })
}

readFileAsync('./package.json')
.then(function(data) {
   data = JSON.parse(data);
   console.log('promise ', data.name);	
}, function(err) {
   console.error('promise ', err);	
})

//promisify
const util = require('util')
const reader = util.promisify(fs.readFile);

reader('./package.json').then((data) => {
  data = JSON.parse(data);
  console.log('promisify', data.name);	
}).catch((err) => {
  console.error('promisify', err);	
})

//async function
async function callReader() {
  try {
    let data = await reader('./package.json')
    data = JSON.parse(data);	  
    console.log('async function ', data.name);
  } catch(err) {
    console.error('async function ', err);	  
  }	
}

callReader();



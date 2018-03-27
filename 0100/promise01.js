const fs = require('fs')
const path = require('path')


console.log('__dirname ', __dirname);
console.log('path.dirname(./) ', path.dirname('./'))
console.log('path.basename(./)', path.basename('./'))



new Promise(function(resolve, reject){
   fs.readFile(path.join(__dirname,'./package.json'),(err,data) => {
     if(err) reject(err);
     else resolve(data);	   
   })
})
.then(function(data){
  data = JSON.parse(data);
  console.log('promise ', data);	
}, function(err){
  console.error(err);	
})

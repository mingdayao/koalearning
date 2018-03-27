var p10 = Promise.reject('reject manually');

p10.then(function(data){
  console.log(data);	
}).catch(function(err){
  console.error(err);	
}).then(function(data) {
  console.log('status, filfilled');	
})

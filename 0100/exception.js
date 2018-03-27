

try {
  throw new Error('exception happens');
} catch(err) {
  console.error(err);
} finally {
  console.log('destory stuff');
}


class MyError extends Error {
  constructor(msg) {
   super();	  
   this.msg = msg;
  }	
}

try {
  throw new MyError('exception');
}catch(e) {
  if(e instanceof MyError) {
    console.error('myError ', e);	  
  } else {
    console.error('other error', e); 
  }	
}








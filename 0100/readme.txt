learn how to use
1. Asynchronous way to read file. though nodejs project the synchronous way
2. ES6 new syntax new Promise(function(resolve, reject) {...})
3. nodeJS new syntax under util package util.promisify()().then().catch()
4. new async await in ES7 and need promisify as well



how to use exception in es6.
var error = new Error('error');
error.statuscode = '101'


or

class MyError extends Error {
  constructor(msg,statuscode) {
    super(msg);
    this.statuscode = statuscode;
  }
}




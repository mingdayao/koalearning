

function * generatorfun(arr) {
  for(let elem of arr) {
    yield elem;	  
  }	
}

var fun = generatorfun(['H', 'E', 'L']);

console.log(fun.next());
console.log(fun.next());
console.log(fun.next());
console.log(fun.next());





function makeIterator(arr) {
  return {
	  nextseq: 0,
	  next:function() {
    	     if(this.nextseq < arr.length) {
	       return { value: arr[this.nextseq++], done:false }
	     } else {
	       return { done: true } 	     
	     }
 	  }
        }	
}

let iter = makeIterator(['H', 'E', 'L']);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

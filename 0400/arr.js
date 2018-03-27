//const arr = param => console.log('')
//const arr = param => ({value:1, name: 'michael'})
//if param is one object {value:1, name: 'michael'}
//const arr = ({id, name}) => {
//  console.log(id, name)
//}


//global get value from this place
//do remember. that this is getting from definition place not get when running place.!!!!!
//this.id = 100;


const luke = {
   id: 2,
   say: function() {
     setTimeout(function() {
       console.log('id ', this.id);	     
     }, 100)	   
   },
   sayWithMe: function() {
     let me = this;	   
     setTimeout(function() {
       console.log('id with me ', me.id )	     
     }, 300)	   
   },
   sayWithArrow: function() {
     setTimeout(() => {
       	console.log('id with arrow', this.id)     
     }, 500)	   
   },
   sayWithGlobalArrow: () => {
     setTimeout(() => {
	console.log('global arrow', this.id)     
     }, 1000)	   
   }	
}

luke.say();
luke.sayWithMe();
luke.sayWithArrow();
luke.sayWithGlobalArrow();

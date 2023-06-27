window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let a = new Promise( (resolve) => {
	setTimeout( () => {
		resolve("a");
	},3000) ;
});
let b = new Promise( (resolve) => {
	setTimeout( () => {
		resolve("b");
	},1000) ;
})
let c = new Promise( (resolve) => {
	setTimeout( () => {
		resolve("c");
	},5000) ;
})
let d = new Promise( (resolve) => {
	setTimeout( () => {
		resolve("d");
	},2000) ;
})
let e = new Promise( (resolve) => {
	setTimeout( () => {
		resolve("e");
	},4000) ;
})

let x = Promise.any([a,b,c,d,e]);
x.then( (data) => {
	let div = document.getElementById("output");
	div.innerHTML = data;
})




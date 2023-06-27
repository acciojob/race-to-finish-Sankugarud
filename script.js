

// Do not change the code above this
// add your promises to the array `promises`

const a = new Promise( (resolve) => {
	setTimeout( () => {
		resolve("a");
	},3000) ;
});
const b = new Promise( (resolve) => {
	setTimeout( () => {
		resolve("b");
	},1000) ;
})
const c = new Promise( (resolve) => {
	setTimeout( () => {
		resolve("c");
	},5000) ;
})
const d = new Promise( (resolve) => {
	setTimeout( () => {
		resolve("d");
	},2000) ;
})
const e = new Promise( (resolve) => {
	setTimeout( () => {
		resolve("e");
	},4000) ;
})

const x = Promise.any([a,b,c,d,e]);
window.promises = [a,b,c,d,e];
x.then( (data) => {
	let div = document.getElementById("output");
	div.innerHTML = data;
})




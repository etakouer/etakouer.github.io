var workerfunc = function () {
	console.log('do something')
}
var blobURL = URL.createObjectURL(new Blob(
	["(" + workerfunc.toString() + ")"],
	{ type: 'text/javascript' }))

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register(blobURL);
}
document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#btn').addEventListener('click', () => {
		console.log("click")
		fetch("/addToCart", {
			method: "POST"
		})
	})
})

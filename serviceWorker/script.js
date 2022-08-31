if ( "serviceWorker" in navigator ) {
    navigator.serviceWorker.register( "./serviceworker.min.js" );
}
document.addEventListener('DOMContentLoaded', ()=> {
	document.querySelector('#btn').addEventListener('click', ()=>{
		console.log("click")
		fetch("/addToCart", {
			method: "POST"
		})
	})
})

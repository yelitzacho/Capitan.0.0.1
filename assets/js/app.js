var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
}

document.getElementById("elBoton").onclick = function() {
  myFunction()
};
function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
}

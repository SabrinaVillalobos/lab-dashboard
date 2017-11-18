/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);



//funcion que achica la barra de navegacion secundaria
var iconav = document.getElementById("iconbar");
var iconavs = document.getElementById("iconbars");
var navbar = document.getElementById("sidebar");
var userimg = document.getElementById("userpic");
var iconsbar = document.getElementById("navbuttons");
var iconsede = document.getElementById("icon1");
var icconspad = document.getElementsByClassName("fontico");
var labico = document.getElementById("labico");
var labicos = document.getElementById("labicos");
var iconscontainer = document.getElementsByClassName("letterico");
labicos.style.display="none";
iconavs.style.display="none";
iconav.addEventListener("click", function(){
	document.getElementById("username").style.fontSize="13px";
	navbar.style.width = "60px";
	userimg.style.width = "47px";
	iconsede.style.paddingLeft= "5px";
	labico.style.display="none";
	labicos.style.display= "block";
	iconavs.style.display="block";
	iconav.style.display="none";



	 var ele = document.getElementsByClassName("letterico");
for (var i = 0; i < ele.length; i++ ) {
    ele[i].style.display="none";
}

	 var icopa = document.getElementsByClassName("fontico");
for (var i = 0; i < icopa.length; i++ ) {
    icopa[i].style.paddingLeft="4px";

}

});

//vuelve la barra a la normalidad
iconavs.addEventListener("click", function(){
	window.location.reload(false);
});
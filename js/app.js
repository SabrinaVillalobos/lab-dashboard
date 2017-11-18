/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);



//funcion que achica la barra de navegacion secundaria
var iconav = document.getElementById("iconbar");
var navbar = document.getElementById("sidebar");
var userimg = document.getElementById("userpic");
var iconsbar = document.getElementById("navbuttons");
addEventListener("click", function(){
	navbar.style.width = "60px";
	userimg.style.width = "47px";
});


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
var downico = document.getElementById("downico");
var graphscontainer = document.getElementById("contgraphs");
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
	graphscontainer.style.left="60px";



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

/* intentando darle funcionalidad al boton de año
downico.addEventListener("click", function(){
	var nav= document.getElementById("nav");
	var dropmenu = document.createElement("div");
	dropmenu.id = "drop"
	nav.appendChild(dropmenu);
});*/


//dropdown de paises al hacer click
var chile = document.getElementById("chile")
chile.addEventListener("click", function(){
    document.getElementById("myDropdownp").classList.toggle("show");
});

//dropdown de año grupo y turno abre al hacer click
downico.addEventListener("click", function(){
    document.getElementById("myDropdown").classList.toggle("show");
});

//dropdown cambiar idioma
var language = document.getElementById("language")
language.addEventListener("click", function(){
    document.getElementById("myDropdownl").classList.toggle("show");
});

//gráfico de estudiantes presentes y deserción de estudiantes, 59 inscritas, 33 inactivas 60%
var canvas = document.getElementById('graph1');
var data = {
    labels: ["# Currently enrolled", "% Dropout"],
    datasets: [
        {
            label: "Students",
            backgroundColor: "#FFC107",
            borderColor: "#CC9B08",
            borderWidth: 2,
            hoverBackgroundColor: "#CA9A09",
            hoverBorderColor: "#715604",
            data: [59, 60],
        }
    ]
};


var option = {
	scales: {
  	yAxes:[{
    		stacked:true,
        gridLines: {
        	display:true,
          color:"rgba(255,99,132,0.2)"
        }
    }],
    xAxes:[{
    		gridLines: {
        	display:false
        }
    }]
  }
};

var myBarChart = Chart.Bar(canvas,{
	scaleFontColor: "#FFFFFF",
	data:data,
  options:option
});



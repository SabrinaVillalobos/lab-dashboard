/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

//inicio funciones alumnas scl2017II
//alumnas inscritas SCL 2017 II (enrollment), da 59
function enrollment(gen){
    var studentsnumber = gen.students.length;
    return studentsnumber;
}
var totalStudSCL20172 = data.SCL["2017-2"];// cambiando esta parte de la data data.SCL["2017-2"]; la formula serviría para todas las sedes, no se integraron las demas por falta de tiempo
totalStudSCL20172 = enrollment(totalStudSCL20172);
console.log("cantidad de estudiantes SCL 2017 II" + " " + "=" + " " + ((totalStudSCL20172) - 2));//menos 2 poque hay un 2 arrays vacío

//alumnas activas SCL2017, 26 activas en total, cambiando -data.SCL["2017-2"]- sirve para todas las sedes
function activeStu(gen){
    var activeS = 0;
    for (var i = 0 ; i < gen.students.length ; i++){
        if (gen.students[i].active == true){
            activeS++;
        }
    }
    return activeS;
}

var actSCL20172 = data.SCL["2017-2"];
actSCL20172 = activeStu(actSCL20172);
console.log("cantidad de estudiantes activas SCL 2017 II" + " " + "=" + " " +(actSCL20172));


//alumnas inactivas SCL 2017 II (dropout) total 33 inactivas
function dropoutStu (studentsnumber,activeS){ //(inscritas - activas = inactivas)
    var drops = ((studentsnumber - activeS) - 2); //el -2 es por los 2 array vacios
    return drops;
}

var dropoutSCL20172 = dropoutStu(totalStudSCL20172, actSCL20172);
console.log("cantidad de estudiantes desertoras SCL 2017 II" + " " + "=" + " " + (dropoutSCL20172));

// % de deserción

var dropPercent = Math.round((dropoutSCL20172/totalStudSCL20172)*100);
 console.log("porcentaje de estudiantes desertoras SCL 2017 II" + " " + "=" + " " + (Math.round((dropoutSCL20172/totalStudSCL20172)*100)));
//fin funciones alumnas scl2017II

//grafico enrolled/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

//inicio funciones alumnas scl2017II
//alumnas inscritas SCL 2017 II (enrollment), da 59
function enrollment(gen) {
    var studentsnumber = gen.students.length;
    return studentsnumber;
}
var totalStudSCL20172 = data.SCL["2017-2"]; // cambiando esta parte de la data data.SCL["2017-2"]; la formula serviría para todas las sedes, no se integraron las demas por falta de tiempo
totalStudSCL20172 = enrollment(totalStudSCL20172);
console.log("cantidad de estudiantes SCL 2017 II" + " " + "=" + " " + ((totalStudSCL20172) - 2)); //menos 2 poque hay un 2 arrays vacío

//alumnas activas SCL2017, 26 activas en total, cambiando -data.SCL["2017-2"]- sirve para todas las sedes
function activeStu(gen) {
    var activeS = 0;
    for (var i = 0; i < gen.students.length; i++) {
        if (gen.students[i].active == true) {
            activeS++;
        }
    }
    return activeS;
}

var actSCL20172 = data.SCL["2017-2"];
actSCL20172 = activeStu(actSCL20172);
console.log("cantidad de estudiantes activas SCL 2017 II" + " " + "=" + " " + (actSCL20172));


//alumnas inactivas SCL 2017 II (dropout) total 33 inactivas
function dropoutStu(studentsnumber, activeS) { //(inscritas - activas = inactivas)
    var drops = ((studentsnumber - activeS) - 2); //el -2 es por los 2 array vacios
    return drops;
}

var dropoutSCL20172 = dropoutStu(totalStudSCL20172, actSCL20172);
console.log("cantidad de estudiantes desertoras SCL 2017 II" + " " + "=" + " " + (dropoutSCL20172));

// % de deserción

var dropPercent = Math.round((dropoutSCL20172 / totalStudSCL20172) * 100);
console.log("porcentaje de estudiantes desertoras SCL 2017 II" + " " + "=" + " " + (Math.round((dropoutSCL20172 / totalStudSCL20172) * 100)));
//fin funciones alumnas scl2017II

//grafico enrolled
// for para iterar toda la data
var active = 0;
var retired = 0;
var enrolled = 0;

for (var i = 0; i < data.SCL['2017-2'].students.length; i++) {
    if (data.SCL['2017-2'].students[i].active == true) {
        active = active + 1;
    } else {
        retired = retired + 1;
    }
    enrolled = active + retired;

};
// //NPS
// var ratings = 0
// for (var i = 0; i < data.SCL['2017-2'].ratings.nps.length; i++){
//     ratings = 

// }

// var all= (data.SCL['2017-2'].students.filter((student)=>{return ((student.sprints[0].score.hse) && (student.sprints[1].score.hse) > 840) && ((student.sprints[0].score.tech) && (student.sprints[1].score.tech) > 1260)})).length;
// console.log (all);


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
labicos.style.display = "none";
iconavs.style.display = "none";
iconav.addEventListener("click", function() {
    document.getElementById("username").style.fontSize = "13px";
    navbar.style.width = "60px";
    userimg.style.width = "47px";
    iconsede.style.paddingLeft = "5px";
    labico.style.display = "none";
    labicos.style.display = "block";
    iconavs.style.display = "block";
    iconav.style.display = "none";
    graphscontainer.style.left = "60px";



    var ele = document.getElementsByClassName("letterico");
    for (var i = 0; i < ele.length; i++) {
        ele[i].style.display = "none";
    }

    var icopa = document.getElementsByClassName("fontico");
    for (var i = 0; i < icopa.length; i++) {
        icopa[i].style.paddingLeft = "4px";

    }

});

//vuelve la barra a la normalidad
iconavs.addEventListener("click", function() {
    window.location.reload(false);
});

//dropdown de paises al hacer click
var chile = document.getElementById("chile")
chile.addEventListener("click", function() {
    document.getElementById("myDropdownp").classList.toggle("show");
});

//dropdown de año grupo y turno abre al hacer click
downico.addEventListener("click", function() {
    document.getElementById("myDropdown").classList.toggle("show");
});

//dropdown cambiar idioma
var language = document.getElementById("language")
language.addEventListener("click", function() {
    document.getElementById("myDropdownl").classList.toggle("show");
});

var totalstudents = document.getElementById('graph1')
var parrafo = document.createElement('p');
var texParrafo = document.createTextNode('61 Students');
parrafo.appendChild(texParrafo);
graph1.appendChild(parrafo);


var graph2 = document.getElementById('graph2')
var parrafo2 = document.createElement('p');
var texParrafo2 = document.createTextNode('35 Dropout');
parrafo2.appendChild(texParrafo2);
graph2.appendChild(parrafo2);

var graph3 = document.getElementById('graph3')
var parrafo3 = document.createElement('p');
var texParrafo3 = document.createTextNode('82% NPS');
parrafo3.appendChild(texParrafo3);
graph3.appendChild(parrafo3);

//gráfico de estudiantes presentes y deserción de estudiantes, 59 inscritas, 33 inactivas 60%
var canvas = document.getElementById('graph4');
var data = {
    labels: ["# Currently enrolled", "% Dropout"],
    datasets: [{
        label: "Students",
        backgroundColor: ["green", "red"],
        borderColor: "#CC9B08",
        borderWidth: 2,
        hoverBackgroundColor: "#CA9A09",
        hoverBorderColor: "#715604",
        data: [enrolled, retired],
    }]
};


var option = {
    scales: {
        yAxes: [{
            stacked: true,
            gridLines: {
                display: true,
                color: "rgba(255,99,132,0.2)"
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            }
        }]
    }
};

var myBarChart = Chart.Bar(canvas, {
    scaleFontColor: "#FFFFFF",
    data: data,
    options: option
});

// grafico deserción

var graph5Data = {
    datasets: [{
        data: [active, retired, ],

        backgroundColor: ['green', 'red', ],


    }],

    labels: [
        'Activas',
        'Retiradas',
    ]
};

var graph5 = document.getElementById('graph5');
var donnutChart = new Chart(graph5, {
    type: 'doughnut',
    data: graph5Data,
});


//Grafico Supera la meta de puntos Tech.


var graph6 = document.getElementById('graph6');
var lineChart = new Chart(graph6, {
    type: 'line',
    data: {
        labels: ["1", "2", ],
        datasets: [{
                label: 'Supera',
                data: [7, 3, ],
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                borderColor: "rgba(255, 206, 86, 1)",
                borderWidth: 1
            },
            {
                label: 'Cumple',
                data: [90, 65],
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1
            },
            {
                label: 'No-Cumple',
                data: [3, 2],
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                borderColor: "rgba(255, 159, 64, 1)",
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var data = {
    labels: ["Sprint 1", "Sprint 2"],
    datasets: [{
        label: "Jedi",
        backgroundColor: "rgba(38,38,38,0.7)",
        borderColor: "rgba(38,38,38,1)",
        data: [4.8, 4],
    }, {
        label: "Profesor",
        backgroundColor: "rgba(75,192,192,0.7)",
        borderColor: "rgba(75,192,192,1)",
        data: [4.3, 3.9],
    }]
};

var graph7 = document.getElementById('graph7');
var barChart2 = new Chart(graph7, {
    type: 'horizontalBar',
    data: data,
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                // Change here
                barPercentage: 1
            }]
        }
    }
});

//muestra el home con los graficos
var homebtn = document.getElementById("home");
var hidestid = document.getElementById("studentscontainer");
homebtn.addEventListener("click", function() {
    graphscontainer.style.display = "block";
    hidestid.style.display = "none";

});

//oculta el home para mostrar las estudintes
var studentsbtn = document.getElementById("students");
studentsbtn.addEventListener("click", function() {
    graphscontainer.style.display = "none";
    studentscontainer.style.display = "block";

});
// for para iterar toda la data
var active = 0;
var retired = 0;
var enrolled = 0;

for (var i = 0; i < data.SCL['2017-2'].students.length; i++){
    if (data.SCL['2017-2'].students[i].active == true) {
        active = active + 1;
    } else {
        retired = retired + 1;
    }
    enrolled = active + retired;

};
// //NPS
// var ratings = 0
// for (var i = 0; i < data.SCL['2017-2'].ratings.nps.length; i++){
//     ratings = 

// }

// var all= (data.SCL['2017-2'].students.filter((student)=>{return ((student.sprints[0].score.hse) && (student.sprints[1].score.hse) > 840) && ((student.sprints[0].score.tech) && (student.sprints[1].score.tech) > 1260)})).length;
// console.log (all);


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

//dropdown de paises al hacer click
var chile = document.getElementById("chile")
chile.addEventListener("click", function() {
    document.getElementById("myDropdownp").classList.toggle("show");
});

//dropdown de año grupo y turno abre al hacer click
downico.addEventListener("click", function() {
    document.getElementById("myDropdown").classList.toggle("show");
});

//dropdown cambiar idioma
var language = document.getElementById("language")
language.addEventListener("click", function() {
    document.getElementById("myDropdownl").classList.toggle("show");
});

var totalstudents = document.getElementById('graph1')
var parrafo = document.createElement('p');
var texParrafo = document.createTextNode('61 Students');
parrafo.appendChild(texParrafo);
graph1.appendChild(parrafo);


var graph2 = document.getElementById('graph2')
var parrafo2 = document.createElement('p');
var texParrafo2 = document.createTextNode('35 Dropout');
parrafo2.appendChild(texParrafo2);
graph2.appendChild(parrafo2);

var graph3 = document.getElementById('graph3')
var parrafo3 = document.createElement('p');
var texParrafo3 = document.createTextNode('82% NPS');
parrafo3.appendChild(texParrafo3);
graph3.appendChild(parrafo3);

//gráfico de estudiantes presentes y deserción de estudiantes, 59 inscritas, 33 inactivas 60%
var canvas = document.getElementById('graph4');
var data = {
    labels: ["# Currently enrolled", "% Dropout"],
    datasets: [
        {
            label: "Students",
            backgroundColor: ["green","red"],
            borderColor: "#CC9B08",
            borderWidth: 2,
            hoverBackgroundColor: "#CA9A09",
            hoverBorderColor: "#715604",
            data: [enrolled, retired],
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

// grafico deserción

var graph5Data = {
    datasets: [{
        data: [active, retired,], 

  backgroundColor: ['green', 'red',], 


    }],

    labels: [
        'Activas',
        'Retiradas',
    ]
};

var graph5 = document.getElementById('graph5');
var donnutChart = new Chart(graph5, {
    type: 'doughnut',
    data: graph5Data,
});


//Grafico Supera la meta de puntos Tech.


var graph6 = document.getElementById('graph6');
var lineChart = new Chart(graph6, {
        type: 'line',
    data: {
        labels: ["1", "2",],
        datasets: [{
            label: 'Supera',
            data: [7, 3,],
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1
        },
        {
            label: 'Cumple',
            data: [90, 65],
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1
        },
        {
            label: 'No-Cumple',
            data: [3, 2],
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var data = {
    labels: ["Sprint 1", "Sprint 2"],
    datasets: [{
        label: "Jedi",
        backgroundColor: "rgba(38,38,38,0.7)",
        borderColor: "rgba(38,38,38,1)",
        data: [4.8, 4],
    },{
        label: "Profesor",
        backgroundColor: "rgba(75,192,192,0.7)",
        borderColor: "rgba(75,192,192,1)",
        data: [4.3, 3.9],
    }]
};

var graph7 = document.getElementById('graph7');
var barChart2 = new Chart(graph7, {
    type: 'horizontalBar',
    data: data,
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                // Change here
                barPercentage: 1
            }]
        }
    }
});

//muestra el home con los graficos
var homebtn = document.getElementById("home");
var hidestid = document.getElementById("studentscontainer");
homebtn.addEventListener("click", function() {
    graphscontainer.style.display = "block";
    hidestid.style.display = "none";

});

//oculta el home para mostrar las estudintes
var studentsbtn = document.getElementById("students");
studentsbtn.addEventListener("click", function() {
    graphscontainer.style.display = "none";
    studentscontainer.style.display = "block";



});

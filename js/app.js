/*
 * Funcionalidad de tu producto
 */
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

//grafico enrolled
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
<<<<<<< HEAD
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
=======
    datasets: [{
        label: "Students",
        backgroundColor: "#FFC107",
        borderColor: "#CC9B08",
        borderWidth: 2,
        hoverBackgroundColor: "#CA9A09",
        hoverBorderColor: "#715604",
        data: [59, 60],
    }]
>>>>>>> 9e64cd53bdd307b261ca7a49a8f524abd9e81193
};


var option = {
    scales: {
<<<<<<< HEAD
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
=======
        

>>>>>>> 9e64cd53bdd307b261ca7a49a8f524abd9e81193

});
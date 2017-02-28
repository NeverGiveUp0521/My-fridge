
document.getElementById("hi").style.color = "blue";

//var ourRequest = new 

var nutrients = [10,20,30,40,50,60,70,80];
var nutrient_weights =[270,67,30,2500,4500,50,890,20]
var target =          [300,65,50,2400,5000,60,1000,18];
//                    carb,fat,p,salt,vitA,C , Ca , Fe
var new_target = [0,0,0,0,0,0,0,0]
var Carbohydrate = 10;
var Fat = 20;
var Protien = 30;
var Salt = 40;
var VitaminA = 50;
var VitaminC = 60;
var Calcium = 70;
var Iron = 80;
var diet = 2000;

function recalculate(diet){
	for (var i = 0; i <= 7; i++) {
		new_target[i] = (diet/2000) * target[i];
		nutrients[i] = Math.round(nutrient_weights[i]/new_target[i]*100);
	};

}


$(document).ready(function(){
	recalculate(diet);
	$("#hidehi").click(function(){
		$("#hi").hide();
	});






// var ctxb = document.getElementById("linegraph");
// var myChart = new Chart(ctxb, {
//   type: 'line',

//   data: {
//     labels: ["M", "Tu","W","Th", "F"],

//     datasets: [{
//       label: 'Carbohydrate',
//       data: [12, 19, 3, 17, 6, 3, 7],
//       backgroundColor: "rgba(153,255,51,0.6)"
//     }, 
//     {
//       label: 'Fats',
//       data: [2, 29, 5, 5, 2, 3, 10],
//       backgroundColor: "rgba(255,153,0,0.6)"
//     },
//     {
//       label: 'Protien',
//       data: [2, 29, 5, 5, 2, 3, 10],
//       backgroundColor: "rgba(255,153,0,0.6)"
//     },
//     {
//       label: 'Salt',
//       data: [2, 29, 5, 5, 2, 3, 10],
//       backgroundColor: "rgba(255,153,0,0.6)"
//     },
//     {
//       label: 'Vitamin A',
//       data: [2, 29, 5, 5, 2, 3, 10],
//       backgroundColor: "rgba(255,153,0,0.6)"
//     },
//     {
//       label: 'VitaminC',
//       data: [2, 29, 5, 5, 2, 3, 10],
//       backgroundColor: "rgba(255,153,0,0.6)"
//     },
//     {
//       label: 'Calcium',
//       data: [2, 29, 5, 5, 2, 3, 10],
//       backgroundColor: "rgba(255,153,0,0.6)"
//     },
//     {
//       label: 'Iron',
//       data: [2, 29, 5, 5, 2, 3, 10],
//       backgroundColor: "rgba(255,153,0,0.6)"
//     },

//     ],

//   },

//   //options: 



// });

//var img = new Image();
//img.src = 'http://www.cgl.uwaterloo.ca/csk/projects/starpatterns/noneuclidean/hyper_filled.jpg';
//img.onload = function(){
	var ctx = document.getElementById("polargraph");
	//var fillPatern = ctx.createPattern(img, 'repeat');
	var secondchart = new Chart(ctx, {

		defaults: {
			padding:10,

		},

		type: 'polarArea',

		data: {

			labels: ["Carbohydrate", "Fat","Protien","Salt", "Vitamin A","Vitamin C", "Calcium","Iron"],

			datasets: [{
				label: 'today',
				backgroundColor: [
				"rgba(253, 40, 21, 0.5)", 
				"rgba(21, 253, 40, 0.5)",
				"rgba(21, 234, 253, 0.5)",
				"rgba(253, 157, 21, 0.5)",
				"rgba(234, 253, 21, 0.5)",
				"rgba(40, 21, 253, 0.5)",
				"rgba(231, 56, 255, 0.5)",
				"rgba(0, 0, 0, 0.5)",
				],
				data: nutrients,
			}],
			
		},

		options: {
			title: {
				display: true,
				//fontSize: 18em,
				text: 'Percentage Completion',
			},

			legend: {
				display: true,
				labels: {
					fontColor: 'rgb(255, 99, 132)',
				},
			},

			scale: {
				ticks: {
					beginAtZero: true,
					max: 150,
					fixedStepSize: 10,


				},

				angleLines: {
					color: "rgba(47,14,112,1)", 
					lineWidth: 1, 
				},
			},

			//animation.animateRotate: true,
			
			
		},

	});
//};

$("#less").click(function(){
		diet = diet - 100;
		recalculate(diet);
		document.getElementById("value").innerHTML= diet;
		secondchart.update(1, false);

	});

$("#more").click(function(){
		diet = diet + 100;
		recalculate(diet);
		document.getElementById("value").innerHTML= diet;
		secondchart.update(1, false);

	});






});





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
//var monday = <a href="www.google.com">M</a>;
;

function recalculate(diet){
	for (var i = 0; i <= 7; i++) {
		new_target[i] = (diet/2000) * target[i];
		nutrients[i] = Math.round(nutrient_weights[i]/new_target[i]*100);
	};

}


$(document).ready(function(){
	//recalculate(diet);
	$("#hidehi").click(function(){
		$("#hi").hide();
	});




//      CCCCCCCCCCCCC                                            tttt                                                   
//      CCC::::::::::::C                                         ttt:::t                                                   
//    CC:::::::::::::::C                                         t:::::t                                                   
//   C:::::CCCCCCCC::::C                                         t:::::t                                                   
//  C:::::C       CCCCCCuuuuuu    uuuuuu      ssssssssss   ttttttt:::::ttttttt       ooooooooooo      mmmmmmm    mmmmmmm   
// C:::::C              u::::u    u::::u    ss::::::::::s  t:::::::::::::::::t     oo:::::::::::oo  mm:::::::m  m:::::::mm 
// C:::::C              u::::u    u::::u  ss:::::::::::::s t:::::::::::::::::t    o:::::::::::::::om::::::::::mm::::::::::m
// C:::::C              u::::u    u::::u  s::::::ssss:::::stttttt:::::::tttttt    o:::::ooooo:::::om::::::::::::::::::::::m
// C:::::C              u::::u    u::::u   s:::::s  ssssss       t:::::t          o::::o     o::::om:::::mmm::::::mmm:::::m
// C:::::C              u::::u    u::::u     s::::::s            t:::::t          o::::o     o::::om::::m   m::::m   m::::m
// C:::::C              u::::u    u::::u        s::::::s         t:::::t          o::::o     o::::om::::m   m::::m   m::::m
//  C:::::C       CCCCCCu:::::uuuu:::::u  ssssss   s:::::s       t:::::t    tttttto::::o     o::::om::::m   m::::m   m::::m
//   C:::::CCCCCCCC::::Cu:::::::::::::::uus:::::ssss::::::s      t::::::tttt:::::to:::::ooooo:::::om::::m   m::::m   m::::m
//    CC:::::::::::::::C u:::::::::::::::us::::::::::::::s       tt::::::::::::::to:::::::::::::::om::::m   m::::m   m::::m
//      CCC::::::::::::C  uu::::::::uu:::u s:::::::::::ss          tt:::::::::::tt oo:::::::::::oo m::::m   m::::m   m::::m
//         CCCCCCCCCCCCC    uuuuuuuu  uuuu  sssssssssss              ttttttttttt     ooooooooooo   mmmmmm   mmmmmm   mmmmmm


// tooltips



  var customTooltips = function(tooltip) {
      // Tooltip Element
      var tooltipEl = document.getElementById('chartjs-tooltip');

      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.innerHTML = "<table></table>"
        document.body.appendChild(tooltipEl);
      }

      // Hide if no tooltip
      if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
      }

      // Set caret Position
      tooltipEl.classList.remove('above', 'below', 'no-transform');
      if (tooltip.yAlign) {
        tooltipEl.classList.add(tooltip.yAlign);
      } else {
        tooltipEl.classList.add('no-transform');
      }

      function getBody(bodyItem) {
        return bodyItem.lines;
      }

      // Set Text
      if (tooltip.body) {
        var titleLines = tooltip.title || [];
        var bodyLines = tooltip.body.map(getBody);

        var innerHtml = '<thead>';

        titleLines.forEach(function(title) {
          innerHtml += '<tr><th>' + title + '</th></tr>';
        });
        innerHtml += '</thead><tbody>';

        bodyLines.forEach(function(body, i) {
          var colors = tooltip.labelColors[i];
          var style = 'background:' + colors.backgroundColor;
          style += '; border-color:' + colors.borderColor;
          style += '; border-width: 2px'; 
          var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
          innerHtml += '<tr><td>' + span + body + "%" +'</td></tr>';
        });
        innerHtml += '</tbody>';

        var tableRoot = tooltipEl.querySelector('table');
        tableRoot.innerHTML = innerHtml;
      }

      var position = this._chart.canvas.getBoundingClientRect();

      // Display, position, and set styles for font
      tooltipEl.style.opacity = 1;
      tooltipEl.style.left = position.left + tooltip.caretX + 'px';
      tooltipEl.style.top = position.top + tooltip.caretY + 'px';
      tooltipEl.style.fontFamily = tooltip._fontFamily;
      tooltipEl.style.fontSize = tooltip.fontSize;
      tooltipEl.style.fontStyle = tooltip._fontStyle;
      tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
    };


                                                                                                                 
//         CCCCCCCCCCCCCHHHHHHHHH     HHHHHHHHH               AAA               RRRRRRRRRRRRRRRRR   TTTTTTTTTTTTTTTTTTTTTTT
//      CCC::::::::::::CH:::::::H     H:::::::H              A:::A              R::::::::::::::::R  T:::::::::::::::::::::T
//    CC:::::::::::::::CH:::::::H     H:::::::H             A:::::A             R::::::RRRRRR:::::R T:::::::::::::::::::::T
//   C:::::CCCCCCCC::::CHH::::::H     H::::::HH            A:::::::A            RR:::::R     R:::::RT:::::TT:::::::TT:::::T
//  C:::::C       CCCCCC  H:::::H     H:::::H             A:::::::::A             R::::R     R:::::RTTTTTT  T:::::T  TTTTTT
// C:::::C                H:::::H     H:::::H            A:::::A:::::A            R::::R     R:::::R        T:::::T        
// C:::::C                H::::::HHHHH::::::H           A:::::A A:::::A           R::::RRRRRR:::::R         T:::::T        
// C:::::C                H:::::::::::::::::H          A:::::A   A:::::A          R:::::::::::::RR          T:::::T        
// C:::::C                H:::::::::::::::::H         A:::::A     A:::::A         R::::RRRRRR:::::R         T:::::T        
// C:::::C                H::::::HHHHH::::::H        A:::::AAAAAAAAA:::::A        R::::R     R:::::R        T:::::T        
// C:::::C                H:::::H     H:::::H       A:::::::::::::::::::::A       R::::R     R:::::R        T:::::T        
//  C:::::C       CCCCCC  H:::::H     H:::::H      A:::::AAAAAAAAAAAAA:::::A      R::::R     R:::::R        T:::::T        
//   C:::::CCCCCCCC::::CHH::::::H     H::::::HH   A:::::A             A:::::A   RR:::::R     R:::::R      TT:::::::TT      
//    CC:::::::::::::::CH:::::::H     H:::::::H  A:::::A               A:::::A  R::::::R     R:::::R      T:::::::::T      
//      CCC::::::::::::CH:::::::H     H:::::::H A:::::A                 A:::::A R::::::R     R:::::R      T:::::::::T      
//         CCCCCCCCCCCCCHHHHHHHHH     HHHHHHHHHAAAAAAA                   AAAAAAARRRRRRRR     RRRRRRR      TTTTTTTTTTT      



////THECHART 
    var ctxb = document.getElementById("linegraph");
    var myChart = new Chart(ctxb, {
      type: 'line',

      data: {
        labels: ["M", "Tu","W","Th", "F"],

        datasets: [{
          label: 'Carbohydrate',
          data: [84 ,  28 ,  80 ,  50 ,  64 ,  46 , 51],
          backgroundColor: "rgba(153,255,51,0.1)",
          fill: false,
          borderWidth: 10,
          borderColor: "rgba(253, 40, 21, 0.5)" ,
          pointRadius: 10,
          pointHoverRadius: 20,
        }, 
        {
          label: 'Fats',
          data: [32 , 35 ,  11 ,  89 ,  61 ,  57 , 45],
          backgroundColor: "rgba(255,153,0,0.1)",
          fill: false,
          borderWidth: 10,
          borderColor: "rgba(21, 253, 40, 0.5)" ,
          pointRadius: 10,
          pointHoverRadius: 20,
        },
        {
          label: 'Protien',
          data: [ 86 ,  10 ,  22 ,  12 ,  77 ,  44 , 93],
          backgroundColor: "rgba(255,153,0,0.1)",
          fill: false, 
          borderWidth: 10,
          borderColor: "rgba(21, 234, 253, 0.5)",
          pointRadius: 10,
          pointHoverRadius: 20,
        },
        {
          label: 'Salt',
          data: [ 81,   24,   42 ,  17 ,  62 ,  53 ,  18],
          backgroundColor: "rgba(255,153,0,0.1)",
          fill: false, 
          borderWidth: 10,
          borderColor: "rgba(253, 157, 21, 0.5)",
          pointRadius: 10,
          pointHoverRadius: 20,
        },
        {
          label: 'Vitamin A',
          data: [ 85 ,  91  , 70 ,  27 ,  38 ,  14,   56],
          backgroundColor: "rgba(255,153,0,0.1)", 
          fill: false, 
          borderWidth: 10,
          borderColor: "rgba(234, 253, 21, 0.5)",
          pointRadius: 10,
          pointHoverRadius: 20,
        },
        {
          label: 'VitaminC',
          data: [ 69 ,  75 ,  47 ,  76 ,  54 ,  65 ,  87],
          backgroundColor: "rgba(255,153,0,0.1)",
          fill: false, 
          borderWidth: 10,
          borderColor: "rgba(40, 21, 253, 0.5)",
          pointRadius: 10,
          pointHoverRadius: 20,
        },
        {
          label: 'Calcium',
          data: [ 31 ,  95  , 19  , 21 ,  58 ,  48 ,  55],
          backgroundColor: "rgba(255,153,0,0.1)",
          fill: false, 
          borderWidth: 10,
          borderColor: "rgba(231, 56, 255, 0.5)",
          pointRadius: 10,
          pointHoverRadius: 20,
        },
        {
          label: 'Iron',
          data: [100 ,  72 ,  60 ,  74  , 13 ,  39 ,  97],
          backgroundColor: "rgba(255,153,0,0.1)",
          fill:false, 
          borderWidth: 10,
          borderColor: "rgba(0, 0, 0, 0.5)",
          pointRadius: 10,
          pointHoverRadius: 20,
        },

        ],

      },













      options: {

        scales:{


          yAxes:[{

            ticks : {
              fontSize: 20,
              beginAtZero: true, 

            },

            scaleLabel: {
              display: false, 

            },

            gridLines :{
              display: false,
              color:"rgba(0,0,0,0.5)",
              zeroLineColor:"rgba(0,0,0,1)",
              lineWidth: 10,
            },

          }],

          xAxes:[{

            ticks : {
              fontSize: 20,
              beginAtZero: true, 

            },

            scaleLabel: {
              display: false, 

            },

            gridLines:{
              display: false,
              color:"rgba(0,0,0,0.5)",
              zeroLineColor:"rgba(0,0,0,1)",
              lineWidth: 10,
            },

          }],

        },

        padding: 100,



        tooltips: {
          enabled: true,
         mode: 'index',
         position: 'nearest',
         custom: customTooltips, 


        
        // tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= value + ' %' %>",
        // multiTooltipTemplate: "<%= value + ' %' %>",

        


      },

      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        },
      },
    },


  });





  //options: 



// });

//var img = new Image();
//img.src = 'http://www.cgl.uwaterloo.ca/csk/projects/starpatterns/noneuclidean/hyper_filled.jpg';
//img.onload = function(){
// 	var ctx = document.getElementById("polargraph");
// 	//var fillPatern = ctx.createPattern(img, 'repeat');
// 	var secondchart = new Chart(ctx, {

// 		defaults: {
// 			padding:10,

// 		},

// 		type: 'polarArea',

// 		data: {

// 			labels: ["Carbohydrate", "Fat","Protien","Salt", "Vitamin A","Vitamin C", "Calcium","Iron"],

// 			datasets: [{
// 				label: 'today',
// 				backgroundColor: [
// 				"rgba(47,14,112,0.5)",
// 				"rgba(221, 232, 12, 0.56)",
// 				"rgba(12, 232, 37, 0.56)",
// 				"rgba(33, 49, 226, 0.56)",
// 				"rgba(226, 33, 69, 0.56)",
// 				"rgba(2, 207, 183, 0.56)",
// 				"rgba(247, 2, 194, 0.56)",
// 				"rgba(201, 43, 236, 0.56)",
// 				],
// 				data: nutrients,
// 			}],

// 		},

// 		options: {
// 			title: {
// 				display: true,
// 				//fontSize: 18;
// 				text: 'Percentage Completion',
// 			},

// 			legend: {
// 				display: true,
// 				labels: {
// 					fontColor: 'rgb(255, 99, 132)',
// 				},
// 			},

// 			scale: {
// 				ticks: {
// 					beginAtZero: true,
// 					max: 150,
// 					fixedStepSize: 10,


// 				},

// 				angleLines: {
// 					color: "rgba(47,14,112,1)", 
// 					lineWidth: 1, 
// 				},
// 			},

// 			//animation.animateRotate: true,


// 		},

// 	});
// //};

// $("#less").click(function(){
// 		diet = diet - 100;
// 		recalculate(diet);
// 		document.getElementById("value").innerHTML= diet;
// 		secondchart.update(1, false);

// 	});

// $("#more").click(function(){
// 		diet = diet + 100;
// 		recalculate(diet);
// 		document.getElementById("value").innerHTML= diet;
// 		secondchart.update(1, false);

// 	});

var segments = ctxb.segments;
for (var i = 0; i < segments.length; i++) {
        // Add properties in here like this
        segments[i].filter = i+1; 
      }

      $("#chart").click(
        function(evt){
          var activePoints = chart.getSegmentsAtEvent(evt);
          console.log(activePoints);
          var url = "http://example.com/?grid[f][collor][]=" + activePoints[0].filter
          alert(url);
        }
        );







    });




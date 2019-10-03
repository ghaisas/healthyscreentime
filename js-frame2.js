
//var frame2pupilsHTMLCollection = document.getElementsByClassName('frame2pupilholder');
//console.log("pupilsHTMLCollection", pupilsHTMLCollection);

//for (var i = 0; i< frame2pupils.length; i++) {
 // console.log('yoo',frame2pupils[i].id);
//};

//var frame2pupilsArray = Array.from(frame2pupilsHTMLCollection);

//var leftPupil = document.getElementById('helloWorld');

//var rightPupil = document.getElementById('goodByeWorld');

//var pupilsArray = [leftPupil, rightPupil];
//input setup
var input= {
  mouseX:{
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY:{
    start: 0,
    end: window.innerHeight,
    current: 0,
  },
  };

//console.log("mouseX", input.mouseX.current)

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

//output setup
var output={
  x: {
    start: -10,
    end: 15,
    end8: 10,
    current: 0,
  },
  y: {
    start:-15,
    end: 15,
    end8: 10,
    current: 0,
  },
};

output.x.range= output.x.end - output.x.start;
output.y.range= output.y.end - output.y.start;

var handleMouseMove = function (event) {
  input.mouseX.current = event.clientX;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
  


  input.mouseY.current = event.clientY;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;



  //output
  output.x.current= output.x.start + (input.mouseX.fraction * output.x.range);
  output.y.current= output.y.start + (input.mouseY.fraction * output.y.range);

  //apply output to frame 2
  var pupils = document.getElementsByClassName('frame2pupil');
 
    for (var i = 0; i < pupils.length; i++) {
    pupils[i].style.transform = 'translate('+ output.x.current + 'px,' + output.y.current+ 'px)';
   }; 
//apply output to frame8

 output.x.currentf8= output.x.end8 -  (input.mouseX.fraction * output.x.range);
 output.y.currentf8= output.y.end8 -  (input.mouseY.fraction * output.y.range);
  
  var frame8pupils = document.getElementsByClassName('frame8pupils');

  for (var i = 0; i < frame8pupils.length; i++) {
    frame8pupils[i].style.transform = 'translate('+ output.x.currentf8 + 'px,' + output.y.currentf8+ 'px)';
   }; 
  //console.log('idk', output.x.current)
  //apply output to html
  //pupilsArray.forEach(function (frame2pupilholder, k) {
  //frame2pupilholder.style.transform = 'translate('+ output.x.current + 'px,' + output.y.current+ 'px)'
 

};
    
    //'translate('+ output.x.current + 'px,' + output.y.current+ 'px)'
//frame2pupilholder.style.transform = 'translate('+ output.x.current + 'px,' + output.y.current+ 'px)';




 //pupilsArray[0].style.transform = 'translate('+ output.x.current + 'px,' + output.y.current+ 'px)'
  
 //pupilsArray[1].style.transform = 'translate('+ output.x.current + 'px,' + output.y.current+ 'px)'

  
 
  

  var handleResize = function () {
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
}

var handleResizeY = function () {
  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
}



window.addEventListener('mousemove', handleMouseMove );
window.addEventListener('resize', handleResizeY);
window.addEventListener('resize', handleResize);







/*/  window.addEventListener("load", function() {
    var svgContainer = document.getElementsByClassName('illustrationContainerFrame2').contentDocument;
    console.log(svgContainer);
    var svg = svgObject.getElementsByClassName('frame2pupil');
    console.log(svg);
  });



var pupilsHTMLCollection = document.getElementsByClassName('frame2pupil');
var pupilsArray= Array.from(pupilsHTMLCollection);


//input setup
var input= {
  mouseX:{
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY:{
    start: 0,
    end: window.innerHeight,
    current: 0,
  },
  };

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;


 // to log X value, activate next 3 lines 
  //if (input.mouseX.fraction > 1) {input.mouseX.fraction = 1;}
  //if (input.mouseX.fraction < 0) {input.mouseX.fraction = 0;}
  
 //console.log ('fraction', input.mouseX.fraction);
  


  
 // to log Y value, activate next 3 lines 
  //if (input.mouseY.fraction > 1) {input.mouseY.fraction = 1;}
 // if (input.mouseY.fraction < 0) {input.mouseY.fraction = 0;}
  
 // console.log ('fractionY', input.mouseY.fraction)


//output setup
var output={
  x: {
    start: -100,
    end: 100,
    current: 0,
  },
  y: {
    start:-100,
    end: 100,
    current: 0,
  },

};

output.x.range= output.x.end - output.x.start;
output.y.range= output.y.end - output.y.start;


var handleMouseMove = function (event) {
  input.mouseX.current = event.clientX;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
  
  input.mouseY.current = event.clientY;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
  
  
  //output
  output.x.current= output.x.start + (input.mouseX.fraction * output.x.range);
   output.y.current= output.y.start + (input.mouseY.fraction * output.y.range);
  
  //apply output to html
 pupilsArray.forEach(function (frame2pupil, k) {
   frame2pupil.style.transform = 'translate('+ output.x.current + 'px,' + output.y.current+ 'px)'
 });
  
  //output to move both eyes separate
  //output.x.current1= output.x.start + (input.mouseX.fraction * output.x.range);
   //output.y.current1= output.y.start + (input.mouseY.fraction * output.y.range);
 
  // output.x.current2= output.x.end - (input.mouseX.fraction * output.x.range);
   //output.y.current2= output.y.end - (input.mouseY.fraction * output.y.range);
 
  // move just one eye, to move both eyes separate, unquote both lines
  //pupilsArray[0].style.transform = 'translate('+ output.x.current1 + 'px,' + output.y.current1+ 'px)'
  
   // pupilsArray[1].style.transform = 'translate('+ output.x.current2 + 'px,' + output.y.current2+ 'px)'

  
  
  //console.log ('ouput.x.current', output.x.current);
  }


var handleResize = function () {
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
}

var handleResizeY = function () {
  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
}



window.addEventListener('mousemove', handleMouseMove )

window.addEventListener('resize', handleResizeY)
window.addEventListener('resize', handleResize)
/*/





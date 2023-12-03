

const boxOne = `<div id="b1"></div>`
const boxTwo = `<div id="b2"></div>`
const elem = $(boxOne)
const elem2 = $(boxTwo)
$("body").append(elem)
$("body").append(elem2)

$("#b1").addClass("box")
$("#b2").addClass("box")


$("#b1").mouseenter(function () {
    $("#b2").css("background-color", "red")
    
  });

$("#b1").mouseleave(function () {
    $("#b2").css("background-color", "purple")
  }
).mouseleave();




$("#b2").mouseenter(function () {
    $("#b1").css("background-color", "red")
    
  });

$("#b2").mouseleave(function () {
    $("#b1").css("background-color", "purple")
  }
).mouseleave();


function thankYou() {
  alert("Thank you for your feedback!");
  document.getElementById("submit").value = "Thank You!";
}


document.getElementById("comment").onfocus = focus;
function focus() {
  var x = window.matchMedia("(min-width: 700px)")
  if ( x.matches) {
    document.getElementById("comment").style.fontSize = "18px";
  }
}

function blurSize() {
  document.getElementById("comment").style.fontSize = "12px";
}

let i = 0;
let txt0 = 'Let\'s KILL some monsters!             ';
let txt1 = 'Killing is my game!              ';
let txt2 = 'I can smell blood!                  ';
let txts= [txt0, txt1, txt2];
let txt = txts[Math.floor(Math.random() * txts.length)];
let start = setInterval(type, 100);

function type() {
  if (i < 10) {
  document.getElementById("kill").innerHTML += txt.charAt(i);
  i++;
} else if (i == 10) {
  document.getElementById("kill").innerHTML += txt.charAt(i) + '<br>';
  i++;
} else if (i > 10 && i < txt.length) {
  document.getElementById("kill").innerHTML += txt.charAt(i);
  i++;
  } else {
  document.getElementById("kill").innerHTML = "";
  txt = txts[Math.floor(Math.random() * txts.length)];
  i = 0;
}
}

$(document).ready(function(){
  $("#dragon").mouseenter(function(){
    $("#fire").animate({
     height: 'toggle'}, "slow");
  });
});
$(function(){
  $("#dragon").mouseleave(function(){
    $("#fire").fadeOut("slow");
 });
})

function thankYou() {
  alert("Thank you for your feedback!");
  document.getElementById("submit").value = "Thank You!";
}

function focusSize() {
  document.getElementById("comment").style.fontSize = "18px";
}

function blurSize() {
  document.getElementById("comment").style.fontSize = "12px";
}

let start = setInterval(type, 100);
let i = 0;
let txt = 'Let\'s KILL some monsters!             ';
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

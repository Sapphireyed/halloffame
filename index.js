// display apropriate values in the table with bestachievements for particular
// necromancer upgrades
function flesh() {
  document.getElementById("inf").innerHTML = "23";
  document.getElementById("player1").innerHTML = "P1/P2";
  document.getElementById("time").innerHTML = "53min";
  document.getElementById("player2").innerHTML = "P3/P4";
  document.getElementById("hellscore").innerHTML = "5567";
  document.getElementById("score").innerHTML = "2322";
  document.getElementById("helltime").innerHTML = "77min";
  document.getElementById("player3").innerHTML = "P5/P6";
}

function bones() {
  document.getElementById("inf").innerHTML = "21";
  document.getElementById("player1").innerHTML = "12";
  document.getElementById("time").innerHTML = "58min";
  document.getElementById("player2").innerHTML = "23";
  document.getElementById("hellscore").innerHTML = "5567";
  document.getElementById("score").innerHTML = "2234";
  document.getElementById("helltime").innerHTML = "87min";
  document.getElementById("player3").innerHTML = "3";
}

function pain() {
  document.getElementById("inf").innerHTML = "21";
  document.getElementById("player1").innerHTML = "12";
  document.getElementById("time").innerHTML = "56min";
  document.getElementById("player2").innerHTML = "23";
  document.getElementById("hellscore").innerHTML = "5567";
  document.getElementById("score").innerHTML = "2333";
  document.getElementById("helltime").innerHTML = "99min";
  document.getElementById("player3").innerHTML = "37";
}

let inf = document.getElementById("inf");
function blood() {
  inf.innerHTML = "?";
  document.getElementById("player1").innerHTML = "1";
  document.getElementById("time").innerHTML = "67min";
  document.getElementById("hellscore").innerHTML = "4567";
  document.getElementById("player2").innerHTML = "2";
  document.getElementById("score").innerHTML = "2133";
  document.getElementById("helltime").innerHTML = "89min";
  document.getElementById("player3").innerHTML = "3";
}

// on small screens the table gets scroll effect to see all columns.
// Function below makes 1st column sticky to make it easier to read what the values refer to
// Also when sticky first column gets a background. Otherwise it would be difficlt to read it when overlapping with next columns
document.querySelectorAll('.tclass').forEach(item => {
  item.addEventListener('scroll', event => {
    var list, index;
list = document.querySelectorAll(".tclass td:nth-child(1)");
for (index = 0; index < list.length; ++index) {
    list[index].style.backgroundColor = "forestgreen";
    }
  })
})
document.querySelectorAll('.tclass').forEach(item => {
  item.addEventListener('mouseout', event => {
    var list, index;
list = document.querySelectorAll(".tclass td:nth-child(1)");
for (index = 0; index < list.length; ++index) {
    list[index].style.backgroundColor = "transparent";
    }
  })
})

// search for table
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".tclass tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
  $("#warrior, #assassin, #wizard, #necromancer, #shaman, #ranger, #druid, #engineer, #barbarian, #paladin").mouseenter(function(){
    $("img", this).width(50);
    $("p", this).show();
  });
});

$(document).ready(function(){
  $("#warrior, #assassin, #wizard, #necromancer, #shaman, #ranger, #druid, #engineer, #barbarian, #paladin").mouseleave(function(){
    $("img", this).width(150);
    $("p", this).hide();
  });
});


function change() {
  var i = 0;
  let pics = ["img/mage_lesson.png", "img/mage_sword.png", "img/mage_potion.png"];
  var el = document.getElementById('mage1');
  let pic= pics[Math.floor(Math.random() * pics.length)]
  if (i < pics.length) {
    el.src = pic;
    i++;
  } else {
    i = 0;
  }
}
setInterval(change, 2000);


$(document).ready(function(){
  $(".all button, .allsmall button").each(function() {
    $(this).on('click', function() {
      $(".all").hide();
      $(".allsmall").show();
      $(".worlds").hide();
      if ($(this).val() == "Enchanted Forest") {
        $("#forest").show();
      } else if ($(this).val() == "Deep Water") {
        $("#water").show();
      } else if ($(this).val() == "The Desert") {
        $("#desert").show();
      } else if ($(this).val() == "Volcano") {
        $("#volcano").show();
      } else if ($(this).val() == "Lost World") {
        $("#lost").show();
      } else if ($(this).val() == "Reign of Dead") {
        $("#undead").show();
      } else if ($(this).val() == "Land of Dragons") {
        $("#dragons").show();
      } else {
        $(".all").show();
        $(".allsmall").hide();
      }
    })
  })
})



  let maps = ["http://rogueadventu.re/wp-content/uploads/2020/03/lost-map.jpg",
  "http://rogueadventu.re/wp-content/uploads/2020/03/w4-map.jpg",
  "http://rogueadventu.re/wp-content/uploads/2020/03/desert-map-1.jpg",
  "http://rogueadventu.re/wp-content/uploads/2020/02/mix-map.png"];
  let i = 0;

function next() {
  if (i == 15) {
    document.getElementById("map").src = maps[i];
  } else if (i < (maps.length-1)) {
    document.getElementById("map").src = maps[(i+1)];
    i++
  }
}
function prev() {
  if (i == 0) {
    document.getElementById("map").src = maps[0];
  } else if (i < (maps.length)) {
    document.getElementById("map").src = maps[(i-1)];
    i--;
  }
}

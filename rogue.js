// hide and displat class abilities on mouseenter/mouseleave
$(document).ready(function(){
  $("#warrior, #assassin, #paladin, #wizard, #necromancer, #shaman, #ranger, #druid, #engineer, #barbarian").mouseenter(function(){
    $("img.classpic", this).hide();
    $("p", this).show();
  });
});

$(document).ready(function(){
  $("#warrior, #assassin, #wizard, #necromancer, #shaman, #ranger, #druid, #engineer, #barbarian, #paladin").mouseleave(function(){
    $("img.classpic", this).show();
    $("p", this).hide();
  });
});

// automatic changing mage picture ant even intervals
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

// displayingparticularworldsection after clickingon a big button plus small
// buttonsto navigate betweenworlds. On 'All' back  todisplayingbig worlds buttons
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



// worlds map gallery, change picture on next " > " and prev " < " button
  let maps = ["http://rogueadventu.re/wp-content/uploads/2020/03/lost-map.jpg",
  "http://rogueadventu.re/wp-content/uploads/2020/03/w4-map.jpg",
  "http://rogueadventu.re/wp-content/uploads/2020/03/desert-map-1.jpg",
  "img/w1mixti.jpg"];
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

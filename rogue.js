$(document).ready(function(){
  $("#warrior, #assassin, #paladin, #wizard, #necromancer, #shaman, #ranger, #druid, #engineer, #barbarian").hover(function(){
    $("p", this).toggle();
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
  $("button").each(function() {
    $(this).on('click', function() {
      $(".all").hide();
      $(".allsmall").show();
      $(".worlds").hide();
      if ($(this).val() == "Enchented Forest") {
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

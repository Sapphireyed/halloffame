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

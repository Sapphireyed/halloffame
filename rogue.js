$(document).ready(function(){
  $("#warrior, #assassin, #paladin, #wizard, #necromancer, #shaman, #ranger, #druid, #engineer, #barbarian").hover(function(){
    $("p", this).toggle();
  });
});

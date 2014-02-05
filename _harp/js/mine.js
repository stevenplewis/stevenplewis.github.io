// CALLING THE ACTUAL PLUGIN
$(document).ready(function(){
  $(".hisrc img").hisrc();
});

// CALLING IT ON SCREEN RESIZE
$(window).resize(function(){
  $(".hisrc img").hisrc();
});
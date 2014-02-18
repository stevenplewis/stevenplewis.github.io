// CALLING THE HISRC PLUGIN
$(document).ready(function(){
  $('.hisrc img').hisrc();
});

// CALLING FITTEXT ON HEADLINE
$(document).ready(function(){
  $('.responsive_h1').fitText(10, { minFontSize: '70px', maxFontSize: '100px' })

  $('.responsive_h2').fitText(23, { minFontSize: '28px', maxFontSize: '35px' })
  $('.responsive_links').fitText(15, { minFontSize: '25px', maxFontSize: '200px' })
});


// MY RESPONSEIVE IMAGE REPLACING
// inspired by CHRIS ARASIN (http://www.fourfront.us/blog/jquery-window-witph-and-media-queries)

var checkSizeReplace = function(){
  if ($("body").css("font-size") == "16px" ){
    // FOR SMALL SIZES
    var itemImages = $('.piece img');
    $.each(itemImages, function(i){
        if(i >= itemImages.length)
            return false;
        if (itemImages[i].src.indexOf('@1x') >= 0){
          var newImgSrc = itemImages[i].src.replace('@1x.png', '.png');
        }
        else if (itemImages[i].src.indexOf('@2x') >= 0){
            var newImgSrc = itemImages[i].src.replace('@2x.png', '.png');
        }
        else {};
        $(itemImages[i]).attr('src', newImgSrc);
    });
  } else if ($("body").css("font-size") == "18px" ) {
    // FOR MED SIZES
    var itemImages = $('.piece img');
    $.each(itemImages, function(i){
        if(i >= itemImages.length)
            return false;
        if (itemImages[i].src.indexOf('@1x') >= 0){
          // do nothing
        }
        else if (itemImages[i].src.indexOf('@2x') >= 0){
            var newImgSrc = itemImages[i].src.replace('@2x.png', '@1x.png');
        }
        else {
          var newImgSrc = itemImages[i].src.replace('.png', '@1x.png');
        };
        $(itemImages[i]).attr('src', newImgSrc);
    });
  } else {
    // FOR BIG SIZES
    var itemImages = $('.piece img');
    $.each(itemImages, function(i){
        if(i >= itemImages.length)
            return false;
        if (itemImages[i].src.indexOf('@1x') >= 0){
          var newImgSrc = itemImages[i].src.replace('@1x.png', '@2x.png');
        }
        else if (itemImages[i].src.indexOf('@2x') >= 0){
            // do nothing
        }
        else {
          var newImgSrc = itemImages[i].src.replace('.png', '@2x.png');
        };
        $(itemImages[i]).attr('src', newImgSrc);
    });
  }
};

  // calling that whole function up there when the page loads and on resize
  $(document).ready(checkSizeReplace);
  $(window).resize(checkSizeReplace);

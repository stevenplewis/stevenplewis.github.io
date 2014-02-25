function kimonoCallback(data) {
// begin kimon functions and looping over issues

  var newComics = data.results.collection1

  // looping over all the issues
  for (var i = 0; i < newComics.length; i+=1) {
    // logs for all the different values we're getting
    // console.log(newComics[i]);
    // console.log(newComics[i].issue_title.text);
    // console.log(newComics[i].issue_title.href);
    // console.log(newComics[i].issue_num);
    // console.log(newComics[i].publisher.text);
    // console.log(newComics[i].issue_info);
    // console.log(newComics[i].cover_art.src);

    // getting the larger-res image for awesome browsing.
    var coverBig = newComics[i].cover_art.src.replace('/n_iv/120/', '/n_iv/300/');

    // creating the HTML for each li or "issue"
    $('#comic-list').append('<li><img src="' + coverBig + '"><div class="info-div"><h2>' + newComics[i].issue_title.text + '</h2><h3>' + newComics[i].issue_num.replace('#ITEM', '') + '</h3><p>' + newComics[i].issue_info + '</p></div></li>');

  // end of looping over all the issues
  };

  // displaying the finished list
  $('#comic-list').css('display','block');


  // click listener to toggle class
  // has to come after loop to make sure they're all loaded
  $('#comic-list li').click(function(){
    if ( $(this).hasClass('selected') ) {
      $(this).removeClass('selected');
    } else {
      $('.selected').removeClass('selected');
      $(this).addClass('selected').find('div');
      $('body').animate({scrollTop:$('.selected').offset().top},500);
    }
  });

// end of kimono stuff
};
// some other kimono nonsense
$.ajax({
    "url":"http://www.kimonolabs.com/api/71blnv5q?apikey=d62eaf8c48b7eb0fe3cab0f0dc1bab83&callback=kimonoCallback",
    "crossDomain":true,
    "dataType":"jsonp"
});


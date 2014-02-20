function kimonoCallback(data) {
  var newComics = data.results.collection1
  
  console.log(newComics.length);

  for (var i = 0; i < newComics.length; i+=1) {
    // console.log(newComics[i]);
    // console.log(newComics[i].issue_title.text);
    // console.log(newComics[i].issue_title.href);
    // console.log(newComics[i].issue_num);
    // console.log(newComics[i].publisher.text);
    // console.log(newComics[i].issue_info);
    // console.log(newComics[i].cover_art.src);

    var coverBig = newComics[i].cover_art.src.replace('/n_iv/120/', '/n_iv/300/');

    $('ul').append('<li><img src="' + coverBig + '"><div><h2>' + newComics[i].issue_title.text + '</h2><h3>' + newComics[i].issue_num + '</h3><p>' + newComics[i].issue_info + '</p></div></li>');
  };
}

$.ajax({
    "url":"http://www.kimonolabs.com/api/71blnv5q?apikey=d62eaf8c48b7eb0fe3cab0f0dc1bab83&callback=kimonoCallback",
    "crossDomain":true,
    "dataType":"jsonp"
});


$(function () {
});




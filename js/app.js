$("div.thumb").each(function() {
  var el = $(this);
  var url = el.find("img").hide().attr("src");
  el.css("background-image", "url(" + url + ")");
});
jQuery.fn.swapWith = function(to) {
    return this.each(function() {
        var copy_to = $(to).clone(true);
        var copy_from = $(this).clone(true);
        $(to).replaceWith(copy_from);
        $(this).replaceWith(copy_to);
    });
};


$(function() {
  $("tr:even").addClass("stripe");

  $('img').each(function() {
    if ($(this).attr("src").match(/screenshot/)) {
      prev = $(this).parent().prev();
      if (!prev.is("code, h1, h2, h3, h4, h5, h6")) {
        $(this).parent().prev().prepend("<div class='screenshot'><a href='#expand'><img src='" + $(this).attr("src") +"' /></a></div>");
        $(this).remove();
      } else {
        $(this).addClass("screenshot2");
      }
    }
  });
  $('.screenshot a').each(function() {
    img = $(this).find("img");
    $(this).attr("href", img.attr("src"));
  }).lightBox();

  var activeChild = $('.child-link.active').closest('li');
  if (activeChild.length) {
    var prevLink = activeChild.prev('.child-item');
    var nextLink = activeChild.next('.child-item');

    if (prevLink.length) $('.pagenav .prev').attr('href', prevLink.find('a').attr('href')).show().find('span').text(prevLink.find('a').text().substr(2));
    if (nextLink.length) $('.pagenav .next').attr('href', nextLink.find('a').attr('href')).show().find('span').text(nextLink.find('a').text().substr(2));

    $('.pagenav').show();
  }
});

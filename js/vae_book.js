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
  $('.screenshot').each(function() {
    prev = $(this).prev()
    if (!prev.is(".literallayout, .programlisting, h1, h2, h3, h4, h5, h6")) {
      $(this).swapWith(prev);
    } else {
      $(this).removeClass("screenshot").addClass("screenshot2");
    }
  });
  $('.screenshot').before("<div class='clearscreenshot'></div>");
  $('.literallayout, .programlisting').prev().before("<div class='clearscreenshot'></div>");
  $('.screenshot .imageobject img').wrap("<a>");
  $('.screenshot .imageobject a').each(function() {
    img = $(this).find("img");
    $(this).attr("href", img.attr("src"));
  }).lightBox();
});

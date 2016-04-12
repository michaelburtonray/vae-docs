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

  $("#content .btm a").each(function() {
    var a = $(this);
    if (window.location.pathname == a.attr("href")) {
      a.parent().addClass("active");
    }
  });
  if ($("#content .btm li.active").length > 1) {
    $("#content .btm li.parent").removeClass("active");
  }
  var parentHref;
  if ($("#content .btm li.child.active").length > 0) {
    var prev = $("#content .btm li.active").prevUntil("li.parent").prev();
    if (!prev.length > 0) prev = $("#content .btm li.active").prev();

    parentHref = prev.find("a").attr("href");
  } else if ($("#content .btm li.parent.active").length > 0) {
    parentHref = $("#content .btm li.active a").attr("href");
  }
  console.log("parent Href is " + parentHref);
  var inParent = false;
  $("#content .btm li").each(function() {
    var a = $(this);
    if (a.hasClass("parent")) {
      if (a.find("a").attr("href") == parentHref) {
        console.log("Found parentHref");
        if (!a.hasClass("active")) {
        console.log("adding Up");
          a.addClass("up");
        }
        inParent = true;
      } else {
        console.log("not inparent");
        inParent = false;
      }
    } else {
      if (inParent) {
        a.show();
      }
    }
  });

  var activePage = $('#content .btm li.active');
  if (activePage.length) {
    var prevLink = activePage.prev('li.child');
    var nextLink = activePage.next('li');

    if (prevLink.length) $('.pagenav .prev').attr('href', prevLink.find('a').attr('href')).show().find('span').text(prevLink.find('a').text());
    if (nextLink.length) $('.pagenav .next').attr('href', nextLink.find('a').attr('href')).show().find('span').text(nextLink.find('a').text());

    $('.pagenav').show();
  }
});

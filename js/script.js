$(".fa-angle-right").click(
  function() {
    var imgActive = $('.images img.active');

    if (($('.images img.active')).is('.last')) {
      $(imgActive).removeClass("active");
      $('.images img.first').addClass("active");
    } else {
      $(imgActive).removeClass("active");
      $(imgActive).next().addClass("active");
    }

  }
);

$(".fa-angle-left").click(
  function() {
    var imgActive = $('.images img.active');

    if (($('.images img.active')).is('.first')) {
      $(imgActive).removeClass("active");
      $('.images img.last').addClass("active");
    } else {
      $(imgActive).removeClass("active");
      $(imgActive).prev().addClass("active");
    }

  }
);

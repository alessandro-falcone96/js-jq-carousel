$(".fa-angle-right").click(
  function() {
    var imgActive = $('.images img.active');
    var circleActive = $('.nav i.active');

    if (($('.images img.active')).is('.last')) {
      $(imgActive).removeClass("active");
      $('.images img.first').addClass("active");
      $(circleActive).removeClass("active");
      $('.nav i.first').addClass("active");
    } else {
      $(imgActive).removeClass("active");
      $(imgActive).next().addClass("active");
      $(circleActive).removeClass("active");
      $(circleActive).next().addClass("active");
    }

  }
);

$(".fa-angle-left").click(
  function() {
    var imgActive = $('.images img.active');
    var circleActive = $('.nav i.active');

    if (($('.images img.active')).is('.first')) {
      $(imgActive).removeClass("active");
      $('.images img.last').addClass("active");
      $(circleActive).removeClass("active");
      $('.nav i.last').addClass("active");
    } else {
      $(imgActive).removeClass("active");
      $(imgActive).prev().addClass("active");
      $(circleActive).removeClass("active");
      $(circleActive).prev().addClass("active");
    }

  }
);

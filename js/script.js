$(".fa-angle-right").click(
  function() {
    var imgActive = $('.images img.active');
    var circleActive = $('.nav i.active');

    if (imgActive.is('.last')) {
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

    if (imgActive.is('.first')) {
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

$(".fa-circle").click(
  function() {

    var circle = $(this);
    var imgActive = $('.images img.active');
    var circleActive = $('.nav i.active');


    if (circle.is('.first')) {
      $(imgActive).removeClass("active");
      $('.images img.first').addClass("active");
      $(circleActive).removeClass("active");
      $('.nav i.first').addClass("active");
    } else if (circle.is('.second')) {
      $(imgActive).removeClass("active");
      $('.images img.second').addClass("active");
      $(circleActive).removeClass("active");
      $('.nav i.second').addClass("active");
    } else if (circle.is('.third')) {
      $(imgActive).removeClass("active");
      $('.images img.third').addClass("active");
      $(circleActive).removeClass("active");
      $('.nav i.third').addClass("active");
    } else if (circle.is('.fourth')) {
      $(imgActive).removeClass("active");
      $('.images img.fourth').addClass("active");
      $(circleActive).removeClass("active");
      $('.nav i.fourth').addClass("active");
    } else if (circle.is('.fifth')) {
      $(imgActive).removeClass("active");
      $('.images img.fifth').addClass("active");
      $(circleActive).removeClass("active");
      $('.nav i.fifth').addClass("active");
    } else if (circle.is('.sixth')) {
      $(imgActive).removeClass("active");
      $('.images img.sixth').addClass("active");
      $(circleActive).removeClass("active");
      $('.nav i.sixth').addClass("active");
    } else if (circle.is('.last')) {
      $(imgActive).removeClass("active");
      $('.images img.last').addClass("active");
      $(circleActive).removeClass("active");
      $('.nav i.last').addClass("active");
    }

    // Prova Switch
    // var circle = $(this);
    // switch (circle) {
    //   case circle.is('.first'):
    //     $(imgActive).removeClass("active");
    //     $('.images img.first').addClass("active");
    //     $(circleActive).removeClass("active");
    //     $('.nav i.first').addClass("active");
    //     break;
    //   case circle.is('.second'):
    //     $(imgActive).removeClass("active");
    //     $('.images img.second').addClass("active");
    //     $(circleActive).removeClass("active");
    //     $('.nav i.second').addClass("active");
    //     break;
    //   case circle.is('.third'):
    //     $(imgActive).removeClass("active");
    //     $('.images img.third').addClass("active");
    //     $(circleActive).removeClass("active");
    //     $('.nav i.third').addClass("active");
    //     break;
    //   case circle.is('.fourth'):
    //     $(imgActive).removeClass("active");
    //     $('.images img.fourth').addClass("active");
    //     $(circleActive).removeClass("active");
    //     $('.nav i.fourth').addClass("active");
    //     break;
    //   case circle.is('.fifth'):
    //     $(imgActive).removeClass("active");
    //     $('.images img.fifth').addClass("active");
    //     $(circleActive).removeClass("active");
    //     $('.nav i.fifth').addClass("active");
    //     break;
    //   case circle.is('.sixth'):
    //     $(imgActive).removeClass("active");
    //     $('.images img.sixth').addClass("active");
    //     $(circleActive).removeClass("active");
    //     $('.nav i.sixth').addClass("active");
    //     break;
    //   case circle.is('.last'):
    //     $(imgActive).removeClass("active");
    //     $('.images img.last').addClass("active");
    //     $(circleActive).removeClass("active");
    //     $('.nav i.last').addClass("active");
    //     break;
    // }
    
  }
);

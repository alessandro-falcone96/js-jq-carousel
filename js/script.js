$(document).ready(function() {

  $(".fa-angle-right").click(
    function() {
      var imgActive = $('.images img.active');
      var circleActive = $('.nav i.active');

      $(imgActive).removeClass("active");
      $(circleActive).removeClass("active");

      if (imgActive.is('.last')) {
        $('.images img.first').addClass("active");
        $('.nav i.first').addClass("active");
      } else {
        $(imgActive).next().addClass("active");
        $(circleActive).next().addClass("active");
      }

    }
  );

  $('html').keydown(function(evento){
    if ((evento.which) == 39) {    //39 freccia destra
      {
        var imgActive = $('.images img.active');
        var circleActive = $('.nav i.active');

        $(imgActive).removeClass("active");
        $(circleActive).removeClass("active");

        if (imgActive.is('.last')) {
          $('.images img.first').addClass("active");
          $('.nav i.first').addClass("active");
        } else {
          $(imgActive).next().addClass("active");
          $(circleActive).next().addClass("active");
        }

      }
    }
  });

  $(".fa-angle-left").click(
    function() {
      var imgActive = $('.images img.active');
      var circleActive = $('.nav i.active');

      $(imgActive).removeClass("active");
      $(circleActive).removeClass("active");

      if (imgActive.is('.first')) {
        $('.images img.last').addClass("active");
        $('.nav i.last').addClass("active");
      } else {
        $(imgActive).prev().addClass("active");
        $(circleActive).prev().addClass("active");
      }
    }
  );

  $('html').keydown(function(evento){
    if ((evento.which) == 37) {    //37 freccia sinistra
      {
        var imgActive = $('.images img.active');
        var circleActive = $('.nav i.active');

        $(imgActive).removeClass("active");
        $(circleActive).removeClass("active");

        if (imgActive.is('.first')) {
          $('.images img.last').addClass("active");
          $('.nav i.last').addClass("active");
        } else {
          $(imgActive).prev().addClass("active");
          $(circleActive).prev().addClass("active");
        }
      }
    }
  });

  $(".fa-circle").click(
    function() {

      var circle = $(this);
      var imgActive = $('.images img.active');
      var circleActive = $('.nav i.active');

      $(imgActive).removeClass("active");
      $(circleActive).removeClass("active");


      if (circle.is('.first')) {
        $('.images img.first').addClass("active");
        $('.nav i.first').addClass("active");
      } else if (circle.is('.second')) {
        $('.images img.second').addClass("active");
        $('.nav i.second').addClass("active");
      } else if (circle.is('.third')) {
        $('.images img.third').addClass("active");
        $('.nav i.third').addClass("active");
      } else if (circle.is('.fourth')) {
        $('.images img.fourth').addClass("active");
        $('.nav i.fourth').addClass("active");
      } else if (circle.is('.fifth')) {
        $('.images img.fifth').addClass("active");
        $('.nav i.fifth').addClass("active");
      } else if (circle.is('.sixth')) {
        $('.images img.sixth').addClass("active");
        $('.nav i.sixth').addClass("active");
      } else if (circle.is('.last')) {
        $('.images img.last').addClass("active");
        $('.nav i.last').addClass("active");
      }

    }
  );

});






// $("img.active").on( "swiperight", function(){
//   {
//     var imgActive = $('.images img.active');
//     var circleActive = $('.nav i.active');
//
//     if (imgActive.is('.last')) {
//       $(imgActive).removeClass("active");
//       $('.images img.first').addClass("active");
//       $(circleActive).removeClass("active");
//       $('.nav i.first').addClass("active");
//     } else {
//       $(imgActive).removeClass("active");
//       $(imgActive).next().addClass("active");
//       $(circleActive).removeClass("active");
//       $(circleActive).next().addClass("active");
//     }
//   }
// });


// $("img.active").on( "swipeleft", function(){
//   {
//     var imgActive = $('.images img.active');
//     var circleActive = $('.nav i.active');
//
//     if (imgActive.is('.first')) {
//       $(imgActive).removeClass("active");
//       $('.images img.last').addClass("active");
//       $(circleActive).removeClass("active");
//       $('.nav i.last').addClass("active");
//     } else {
//       $(imgActive).removeClass("active");
//       $(imgActive).prev().addClass("active");
//       $(circleActive).removeClass("active");
//       $(circleActive).prev().addClass("active");
//     }
//   }
// });

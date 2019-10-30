$(function(){
  $(".navicon").click(function(){
    $(this).toggleClass('open');
    $(".nav").toggleClass('open');
  });
/*$(window).scroll(function() {
    if($(this).scrollTop() >= 1) {
      $(".nav").addClass("open fixed");
      $(".navicon").addClass("open-top");
      $(".navicon").removeClass("open");
    }
    else {
      $(".nav").removeClass("open fixed");
      $(".navicon").removeClass("open-top");
    }
  });
});*/
});
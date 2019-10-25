$('#nav').affix({
  offset: {
    top: $('header').height()
  }
});



$(document).ready(function () {
  $("portfolio-button").mouseover(function () {
    $("portfolio-screenshot").css("display", "none");
  });
  // $("p").mouseout(function () {
  //   $("p").css("background-color", "lightgray");
  // });
});
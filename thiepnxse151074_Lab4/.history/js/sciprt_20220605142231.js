$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#reverse_button").click(function () {
    $("#reverse_table").modal("show");
  });

  $("#carouselNe").carousel({ interval: 1000 });

  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#carouselNe").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      $("#carouselNe").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });
});

$(document).ready(function () {
  $(window).on("load", function () {
    $(".preloader").addClass("complete");
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });

  // progress bars

  var waypoint = new Waypoint({
    element: document.getElementById("experience"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:95%;transition:2s all;");
      p[1].setAttribute("style", "width:70%;transition:2.5s all;");
      p[2].setAttribute("style", "width:50%;transition:3s all;");
      p[3].setAttribute("style", "width:45%;transition:3.5s all;");
      p[4].setAttribute("style", "width:30%;transition:4s all;");
      p[5].setAttribute("style", "width:15%;transition:4.5s all;");
    },
    offset: "90%",
  });

  var typed = new Typed(".element", {
    strings: [
      "The Best Pizza",
      "Better than Dominos",
      "Delicious",
      "Simply The Best",
    ],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });
  $("a").smoothScroll({
    speed: 2000,
  });
});

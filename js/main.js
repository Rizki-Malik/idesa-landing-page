(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();
  
  // Smooth scrolling for navbar links and footer links
  $(".navbar-nav a, .back-to-top, .btn-link, .footer-menu a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70
        },
        800,
        "easeInOutExpo"
      );
      
      // Add active class to clicked nav item and remove from others
      $(".navbar-nav a").removeClass("active");
      $(this).addClass("active");
    }
  });
  
  // Add active class based on scroll position
  $(window).scroll(function () {
    var position = $(this).scrollTop();
    $(".navbar-nav a").each(function() {
      var target = $($(this).attr("href"));
      if (target.length && position >= target.offset().top - 100 && position <= target.offset().top + target.height()) {
        $(".navbar-nav a").removeClass("active");
        $(this).addClass("active");
      }
    });
  });

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("bg-primary shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("bg-primary shadow-sm").css("top", "-150px");
    }
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
})(jQuery);

// Select all images with the class 'about-img'
const images = document.querySelectorAll(".about-img");

images.forEach((image) => {
  const randomDelay = Math.random() * 3;
  image.style.animationDelay = `${randomDelay}s`;
});

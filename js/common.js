$(function() {
  showLand();

  function showLand() {
    setTimeout(function() {
      $(".header").addClass("show");
    }, 300);
    setTimeout(function() {
      init();
      $(".slider").addClass("show");
    }, 600);
    setTimeout(function() {
      $(".slider__item")
        .find(".slider__slogan")
        .addClass("show");
    }, 900);
    setTimeout(function() {
      $(".slider__position").addClass("show");
    }, 1200);
    setTimeout(function() {
      $(".slider__date").addClass("show");
      $(".slider__item")
        .eq(0)
        .find(".slider__bg--after")
        .addClass("show");
    }, 1500);
  }

  function init() {
    var slider,
      sliderItem = $(".slider__item"),
      speed = 1000;

    slider = $(".slider__list").slick({
      infinite: false,
      fade: true,
      speed: speed,
      pauseOnFocus: false,
      pauseOnHover: false,
      prevArrow: $(".slider__prev"),
      nextArrow: $(".slider__next")
    });

    setTimeout(function() {
      slider.slick("slickSetOption", "autoplay", true, true);
      slider.slick("slickSetOption", "autoplayspeed", 2000, true);
    }, 1500);

    $(".slider__prev, .slider__next").addClass("show");

    var modelsImg = $(".slider__position img"),
      timerId;

    slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        clearTimeout(timerId);
      modelsImg.siblings().removeClass("active");
      modelsImg.eq(nextSlide).addClass("active");
      sliderItem
        .eq(currentSlide)
        .find(".slider__bg--after")
        .removeClass("show");
      timerId = setTimeout(function() {
        sliderItem
          .eq(nextSlide)
          .find(".slider__bg--after")
          .addClass("show");
      }, speed / 2);
    });

    modelsImg.on("click", function(e) {
      var index = $(e.target).index();
      slider.slick("slickGoTo", index);
    });

    $(".nav__btn").on("click", function() {
      $(".nav").toggleClass("opened");
    });
  }
});

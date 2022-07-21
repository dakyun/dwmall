//slick slider
$('.ing-rel-box').slick({
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:4000,
    infinite:true,
});

// sticky header
var $mainHeader = $(".event-tab"),
  $window = $(window),
  $divide = $mainHeader.outerHeight();

$window.scroll(function () {
  if ($window.scrollTop() > $divide) {
    if (!$mainHeader.hasClass("shrink")) {
      $mainHeader.addClass("shrink");
    }
  } else {
    if ($mainHeader.hasClass("shrink")) {
      $mainHeader.removeClass("shrink");
    }
  }
});

//top btn

const btt = $("#back-to-top");
$(window).scroll(function () {
  if ($(window).scrollTop() > 150) {
    btt.addClass("visible");
  } else {
    btt.removeClass("visible");
  }
});
btt.click(function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 400);
});

// event-tab
const tabmenu = $("main>.event-tab>ul>li");
const tab = $("main>.event-tab>ul")
const sections = $(".section");
const speed = 200;

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    tab.addClass("small");
  } else {
    tab.removeClass("small");
  }
  let scrollTop = $(window).scrollTop();
  if (scrollTop >= $("#ing-content").offset().top - speed) {
    $("main>.event-tab>ul>li")
      .eq(0)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  if (scrollTop >= $("#end-content").offset().top - speed) {
    $("main>.event-tab>ul>li")
      .eq(1)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  if (scrollTop >= $("#review-content").offset().top - speed) {
    $("main>.event-tab>ul>li")
      .eq(2)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
});





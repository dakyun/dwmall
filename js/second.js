// accordian menu
$(".section-title").on('click', function (e) {
  if ($(this).hasClass('open')) {
    $('.section-title').removeClass('open');
    $('.collapsing-section').slideUp();
  } else {
    $('.section-title').removeClass('open');
    $('.collapsing-section').slideUp();
    $(this).addClass('open');
    var sectionToOpen = $(this).next('.collapsing-section');
    $(sectionToOpen).slideDown();
  }
});

//slick slider
$('.reward-banner>ul').slick({
  arrows:false,
  dots:false,
  autoplay:true,
  autoplaySpeed:3000,
  infinite:true,
});

//popup
function popUp(){
  $('#name').val('');
  $('#phone_No').val('');
  $('#popup').css('display', 'flex').hide().fadeIn();
}

function modalClose(){
  $('#popup').fadeOut();
}

// reply

$('.reply-box').on('click', function(e){
  e.preventDefault();  

if($(this).hasClass("show-all") === true){     $(this).removeClass('show-all');  }
else { $(this).addClass('show-all'); }

})

// sticky-header
// $(document).ready(function(){

//   $(window).scroll(function(){
//       var bottom_menu = $("#page-tab").offset().top;
//       console.log(bottom_menu);
//       var docScrollY = $(document).scrollTop();
//       var barThis = $("#page-tab")
//       if( docScrollY >= 400 ) {
//           barThis.addClass("top-fix");
//       }else{
//           barThis.removeClass("top-fix");
//       }
//   });
// });
const pageTab = $("#page-tab>ul").offset().top;
console.log(pageTab)

$(window).scroll(function () {
  if ($(window).scrollTop() > pageTab) {
    $('#page-tab>ul').addClass("fix-top");
  } else {
    $('#page-tab>ul').removeClass("fix-top");
  } 
});

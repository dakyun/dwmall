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

const reply = $('.reply-container>ul>li')

reply.click(function(){
    reply.addClass('reply-show');
})

$(document).ready(function(){

$('.js-section-features').waypoint(function (direction) {
    if(direction == "down"){
        $('nav').addClass('sticky')
    }else{
        $('nav').removeClass('sticky')
    }
}, { offset: '60px;'}
)



$('.js-wp-1').waypoint(function (direction) {
    $('.js-wp-1').addClass("animated fadeInUp")
}, { offset: '50%'}
)

$('.js-wp-2').waypoint(function (direction) {
    $('.app-screen').addClass("animated fadeInUp")
}, { offset: '50%'}
)

$('.js-wp-3').waypoint(function (direction) {
    $('.city-image').addClass("animated fadeInUp")
}, { offset: '50%'}
)

$('.js-wp-4').waypoint(function (direction) {
    $('.js-wp-4').addClass("animated fadeInUp")
}, { offset: '50%'}
)





$('.js-scroll-buton').click(function () {
  $('html, body').animate({scrollTop: $('.js-section-plans').offset().top},1000)
}
)

$('.js-icon-movile').click(function () {
    
    var nav= $('.js-main-nav');
    var icon= $('.js-icon');


    nav.slideToggle(200)

    if(icon.attr('name')=="menu"){
        icon .attr( "name", "close" );
    } else{
        icon .attr( "name", "menu" );
    }
  }
  )









});
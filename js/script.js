$('.menu-toggle').click(function() {  
  $('.menu').toggleClass('menu-open', 500);
  $(this).toggleClass('open');  
});

$('#first_carousel').owlCarousel({
  loop: true,
  margin: 10,
  dots:false,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    700: {
      items: 3,
      nav: true,
    },
    1780: {
      items: 5,
      nav: true,
    }
  }
});

$('#second_carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  autoplayHoverPause: true,
  items: 1
});

$('#third_carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1025: {
      items: 6,
    }
  }
});
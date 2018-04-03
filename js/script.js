$('.menu-toggle').click(function() {  
  $('.nav').toggleClass('nav-open', 500);
  $(this).toggleClass('open');  
});

$('#first_carousel').owlCarousel({
  loop: true,
  margin: 10,
  dots:false,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    700: {
      items: 3
    },
    1400: {
      items: 5
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
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    }
  }
});
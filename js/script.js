$('.menu-toggle').click(function() {
  alert('hi');
  $('.nav').toggleClass('nav-open', 500);
  $(this).toggleClass('open');
  
})
$(document).ready(function() {
  setTimeout(function() {
    $('.top-notification').fadeIn(3000)
  }, 5000);
  $('.closeme').click(function() {
    $('.top-notification').fadeOut(3000);
  });
});
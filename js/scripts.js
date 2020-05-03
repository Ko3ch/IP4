$(document).ready(function(){
  $(".product").click(function(){
    $(".overlay-form").fadeIn();
  });
  $(".close-btn").click(function(){
    $(".overlay-form").fadeOut();
  });
});
$(document).on('click', '.check-crust', function() {      
  $('.check-crust').not(this).prop('checked', false);
});
$(document).on('click', '.check-size', function() {
  $('.check-size').not(this).prop('checked', false);
});      
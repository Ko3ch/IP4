function Pizza(){
  size = 0;
  crust = 0;
  toppings = [];
  total = [];
};
Pizza.prototype.totalCheckout = function() {
  this.total = this.toppings.push(size,crust);
  this.total.reduce((a, b) => a + b, 0);
  return this.total;
}
function smallValues(){
  $('#mushroom').val("150");
  $('#sausage').val("100");
  $('#bacon').val("150");
}
function mediumValues(){
  $('#mushroom').val("200");
  $('#sausage').val("150");
  $('#bacon').val("200");
}
function largeValues(){
  $('#mushroom').val("250");
  $('#sausage').val("200");
  $('#bacon').val("180");
}
function smallPrices(){
  $('#mushroom-price').text('ksh. ' + 150);
  $('#sausage-price').text('ksh. ' + 100);
  $('#bacon-price').text('ksh. ' + 150);
}
function mediumPrices(){
  $('#mushroom-price').text('ksh. ' +200);
  $('#sausage-price').text('ksh. ' +150);
  $('#bacon-price').text('ksh. ' +200);  
}
function largePrices(){

  $('#mushroom-price').text('ksh. ' + 250);
  $('#sausage-price').text('ksh. ' + 200);
  $('#bacon-price').text('ksh. ' + 180);
}
$(document).on('click', '.crust', function(){      
  $('.crust').not(this).prop('checked', false);  
});
$(document).on('click', '.size', function(){
  $('.size').not(this).prop('checked', false);
});
$(document).ready(function(){
  
  let selectedSizePrice = 0;
  let selectedCrustPrice = 0;
  let selectedToppings = [];

  let pizza = new Pizza(selectedSizePrice, selectedCrustPrice);
  pizza.toppings = selectedToppings;

  $(".product").click(function(){
    $(".overlay-form").fadeIn();
    $('#small').click(function(){
      if($('#small').is(':checked')){
        $('.topping').each(function(){
          smallPrices();     
          smallValues();     
        });
        selectedSizePrice = $("#small").val();
      }      
    });
    $('#medium').click(function(){
      if($('#medium').is(':checked')){
        //alert("You");
        $('.topping').each(function(){
          mediumPrices();
          mediumValues();
        });
        selectedSizePrice = $('#medium').val();
      }
    });
    $('#large').click(function(){
      if($('#large').is(':checked')){
        //alert("MOthe r fuclker");
        $('.topping').each(function(){
          largePrices();
          largeValues();
        });
        selectedSizePrice = $('#large').val(); 
      }
    });
    $('#crispy').click(function(){
      if($('#crispy').is(':checked'))
        selectedCrustPrice = $('#crispy').val();
    });
    $('#gluten').click(function(){
      if($('#gluten').is(':checked'))
        selectedCrustPrice = $('#gluten').val();
    });
    $('#stuffed').click(function(){
      if($('#stuffed').is(':checked'))
        selectedCrustPrice = $('#stuffed').val();
    });
    $('#btn-checkout').click(function(){
        selectedToppings = $('.topping:checked').map(function(){
        return this.value;
      }).get();
      console.log(selectedToppings);
      $('.overlay-form').fadeOut();
    });    
    $(".close-btn").click(function(){
      $('.topping').prop("checked",false);
      $('.crust:checked').prop("checked",false);
      $('.size:checked').prop("checked",false);
      $(".overlay-form").fadeOut();
    });
  });     
});
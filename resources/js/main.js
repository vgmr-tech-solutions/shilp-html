$('a[href="#"]').click(function (event) {
  event.preventDefault();
});

// topnav
$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');
    }
});

$('.cart-product').click(function(e) {
    //alert('ok');
    e.preventDefault();
    $('.cart-list').addClass('show');
    $('.bg-overlay').addClass('show');
    $('body').toggleClass('overflow-hidden');
});

function closeCart(e) {
    e.preventDefault();
    $('.cart-list').removeClass('show');
    $('.bg-overlay').removeClass('show');
    $('body').removeClass('overflow-hidden');
}
$('.btn-cart, .bg-overlay').click(closeCart);
/* Increment Decrement Quantity */
$(document).ready(function() {
    const minus = $('.quantity__minus');
    const plus = $('.quantity__plus');
    const input = $('.quantity__input');
    minus.click(function(e) {
      e.preventDefault();
      var value = input.val();
      if (value > 1) {
        value--;
      }
      input.val(value);
    });
    
    plus.click(function(e) {
      e.preventDefault();
      var value = input.val();
      value++;
      input.val(value);
    })
  });

$(".js-heart").click(function() {
  $(this).toggleClass("fas");
});



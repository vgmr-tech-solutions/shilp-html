$('a[href="#"]').click(function (event) {
  event.preventDefault();
});

$('#menu').click(function () {
  $(this).addClass('open');
  $(this).parents('.navbar').find('.navbar-collapse').toggleClass('active');
  $(this).parents('.navbar').find('.menu').toggleClass('active');
})

// topnav
$(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');
    }
});

// navbar js active js
$(window).ready(function ($) {
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  // alert(path);
  $('.nav-link').each(function () {
    if (this.href === path) {
      $(this).parent().addClass('navActive');
      // alert("run");
    }
  });
})


//Font Increment
$('.font-increament li a').click(function(){
  $(this).parent().addClass('active').siblings().removeClass('active');
})

var defaultFontSize = $('html').css('font-size');
const minSize = parseFloat(defaultFontSize, 12) - 1;
const maxSize = parseFloat(defaultFontSize, 12) + 1;

$(".resetFont").click(function () {
  $('html').css('font-size', defaultFontSize);
});

$(".increaseFont").click(function () {
  var fontSize = getFontSize();
  var newFontSize = fontSize + 1;
  if (newFontSize <= maxSize) setFontSize(newFontSize);
  return false;
});

$(".decreaseFont").click(function () {
  var fontSize = getFontSize();
  var newFontSize = fontSize - 1;
  if (newFontSize >= minSize) setFontSize(newFontSize);
  return false;
});

function getFontSize() {
  var currentSize = $("html").css("font-size");
  var currentSizeNumber = parseFloat(currentSize, 12);
  if (currentSizeNumber > 24) {
      currentSizeNumber = 24;
  }
  if (currentSizeNumber < 10) {
      currentSizeNumber = 10;
  }
  return currentSizeNumber;
}

function setFontSize(size) {
  $("html").css("font-size", size);
  $(".actualSize").html(size);
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      document.getElementById('slider').checked = false;
  } else {
      setTheme('theme-light');
      document.getElementById('slider').checked = true;
  }
})();

 
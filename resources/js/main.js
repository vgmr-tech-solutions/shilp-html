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

$('.fa-search').on('click', function(){
  $('.searchbar').show();
  $('.resp-search').hide();
})

$('.fa-times-circle').on('click', function(){
  $('.searchbar').hide();
  $('.resp-search').show();
})
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



// Comment Character Count Script Starts  
function markRequired() {
  var control = $(this).children(".form-control");
}

function countCharacters() {
  var max = $(this).attr("maxlength");
  var length = $(this).val().length;
  var counter = max - length;
  var helper = $(this).next(".form-text");
  // Switch to the singular if there's exactly 1 character remaining
  if (counter !== 1) {
      helper.text(counter + " Remaining Characters");
  } else {
      helper.text(counter + " Remaining Characters");
  }
  // Make it red if there are 0 characters remaining
  if (counter === 0) {
      helper.removeClass("text-muted");
      helper.addClass("text-danger");
  } else {
      helper.removeClass("text-danger");
      helper.addClass("text-muted");
  }
}

$(document).ready(function () {
  $(".form-group").each(markRequired);
  $(".form-control").each(countCharacters);
  $(".form-control").keyup(countCharacters);
});
// Comment Character Count Script Ends   


// Responsive List Resource Filters
$( window ).resize( function() {
  
  if ( window.matchMedia( '(max-width:767px)' ).matches ) {
    
    $('.applied-filter').click(function () {
      $(this).parents('.left-column').addClass('open');
      $('.reset').css('display','block');
    });
      $('.filter-details .close').click(function () {
          $(this).parents('.left-column').removeClass('open');
          $('.reset').css('display','none');
      })
      $('.btn-apply').click(function () {
          $(this).parents('.left-column').removeClass('open');
          $('.reset').css('display','none');
      });
      $('.btn-cancle').click(function () {
          $(this).parents('.left-column').removeClass('open');
          $('.reset').css('display','none');
      });

    
  } else if ( window.matchMedia( '(max-width:991px)').matches ) {
    
    $('.applied-filter').click(function () {
      $(this).parents('.left-column').addClass('open');
      $('.reset').css('display','block');
    });
      $('.filter-details .close').click(function () {
          $(this).parents('.left-column').removeClass('open');
          $('.reset').css('display','none');
      })
      $('.btn-apply').click(function () {
          $(this).parents('.left-column').removeClass('open');
          $('.reset').css('display','none');
      });
      $('.btn-cancle').click(function () {
          $(this).parents('.left-column').removeClass('open');
          $('.reset').css('display','none');
      });

  } else {
    
    // console.log ('desktop' );
    
  }

} );
$( window ).resize();

$(document).ready(function(e) {
  background();
});
function background()
{
  var img=$('.bgImage');
  img.css('background-image', function () {
  var bg = ('url(' + $(this).data('bg-url') + ')');
  return bg;
  });
}
// function backgroundPurpose()
// {
//   var img=$('.purpose');
//   img.css('background-image', function () {
//   var bg = ('url(' + $(this).data('bg-url') + ')');
//   return bg;
//   });
// }
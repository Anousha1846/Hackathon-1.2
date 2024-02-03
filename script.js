// =====================================header start =========================================================
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navMenu && navToggle && navClose) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })

    /* Menu hidden */
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })


}
/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
    searchBtn = document.getElementById('search-btn'),
    searchClose = document.getElementById('search-close')

if (search && searchBtn && searchClose) {
    /* Search show */
    searchBtn.addEventListener('click', () => {
        search.classList.add('show-search')
    })

    /* Search hidden */
    searchClose.addEventListener('click', () => {
        search.classList.remove('show-search')
    })

}

/*=============== LOGIN ===============*/
var login = document.getElementById('login')
var loginBtn = document.getElementById('login-btn')
var loginClose = document.getElementById('login-close')

/* Login show */
if(login && loginBtn && loginClose){
    loginBtn.addEventListener('click', () => {
        login.classList.add('show-login')
    
    })
}


// successfulLOGIN

function successfulLOGIN() {


    var emailLOGIN = document.getElementById('emailLOGIN');
    var passwordLOGIN = document.getElementById('passwordLOGIN');

    if (emailLOGIN.value == "") {
        alert('enter your email')
    }
    else if (passwordLOGIN.value == "") {
        alert('enter your password')
    }
    else {
        alert('YOU HAVE SUCCESSFULLY LOGGED IN')
    }

}

// /* Login hidden */
loginClose.addEventListener('click', () => {
    login.classList.remove('show-login')
})

// // ============================================== header end =================================================


// ------------------------------------------------- slider start------------------------------------

let slide = document.querySelectorAll('.slide');
var current = 0;

function cls() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

function next() {
    cls();
    if (current === slide.length - 1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function () {
        x += 0.1;
        slide[current].style.opacity = x;
        if (x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);

}

function prev() {
    cls();
    if (current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function () {
        x += 0.1;
        slide[current].style.opacity = x;
        if (x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);

}

function start() {
    cls();
    slide[current].style.display = 'block';
}
start();

// ------------------------------------------------- slider end------------------------------------
/* ================================================= colab start ===================================== */
$(document).ready(function () {
    var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
      wrap: false
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 3) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 1) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
});

/* ================================================= colab  end ======================================== */

// =======================================================================================================



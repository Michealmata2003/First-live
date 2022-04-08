// Navbar hamburger script

const openNav = document.querySelector('.first');
const closeNav = document.querySelector('.second');
const navbar = document.querySelector('.navres');
const navlink = document.querySelector('.navlink');

openNav.addEventListener('click', show);
closeNav.addEventListener('click', comot);
navlink.addEventListener('click', shift);

function show() {
     navbar.style.display = 'block';
     openNav.style.display = 'none';
     closeNav.style.display = 'block';
}

function comot() {
     navbar.style.display = 'none';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
}

function shift() {
     navbar.style.display = 'none';
     openNav.style.display = 'block';
     closeNav.style.display = 'none';
}


// Accordion Script

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
     acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
               panel.style.maxHeight = null;
          } else {
               panel.style.maxHeight = panel.scrollHeight + "px";
          }
     });
}


// Preloader Script

const loader = document.getElementById('preloader');

window.addEventListener('load', load);

function load() {
     loader.remove()
}


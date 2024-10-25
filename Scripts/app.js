const hamburer = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const burgerIcon = document.querySelector('.burger');

if (hamburer) {
  hamburer.addEventListener('click', () => {
    navList.classList.toggle('open');

    if (burgerIcon.classList.contains('fa-bars')) {
      burgerIcon.classList.remove('fa-bars');
      burgerIcon.classList.add('fa-xmark');
    } else {
      burgerIcon.classList.remove('fa-xmark');
      burgerIcon.classList.add('fa-bars');
    }
  });
}

// Dark Mode
function myFunction() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}

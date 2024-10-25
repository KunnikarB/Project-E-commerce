// Popup
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup-close');

if (popup) {
  closePopup.addEventListener('click', () => {
    popup.classList.add('hide-popup');
  });

  window.addEventListener('load', () => {
    setTimeout(() => {
      popup.classList.remove('hide-popup');
    }, 1000);
  });
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};
// Scroll Indicator
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
}

// Dark Mode
function myFunction() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}

// slide show
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

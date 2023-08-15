const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    navbar.classList.add('opaque');
  } else {
    navbar.classList.remove('opaque');
  }
});








window.addEventListener("scroll", function() {
  var navbar = document.getElementsByClassName("nav-wrapper");
  var logo = this.document.getElementsByClassName("logo");
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("scrolled");
    logo.style.position = 'relative';
    logo.style.top = '10px';
    logo.style.left = '10px';
  } else {
    navbar.classList.remove("scrolled");
  }
});

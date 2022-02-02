let position;

window.addEventListener("scroll", function () {
    position = window.scrollY;
  if (position >= 203) {
    document.querySelector(".navbar").classList.add("navbar-2")
  } else if (position < 203) {
    document.querySelector(".navbar").classList.remove("navbar-2")
  }
  console.log(position);
});
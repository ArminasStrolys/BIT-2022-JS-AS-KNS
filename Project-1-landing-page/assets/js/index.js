let position;
const $ = document.querySelector.bind(document);

window.addEventListener("scroll", function () {
    position = window.scrollY;
  if (position >= 203) {
    $(".navbar").classList.add("navbar-2")
  } else if (position < 203) {
    $(".navbar").classList.remove("navbar-2")
  }
  console.log(position);
});

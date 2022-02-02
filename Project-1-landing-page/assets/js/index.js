const $ = document.querySelector.bind(document);

window.addEventListener("scroll", function () {
  const offset = 204;
  let position;
  position = window.scrollY;
  if (position >= offset) {
    $(".navbar").classList.add("navbar-2");
  } else if (position < offset) {
    $(".navbar").classList.remove("navbar-2");
  }
  console.log(position);
});

let scroll = new SmoothScroll('a[href*="#"', {
  speed: 1000,
  easing: "easeInQuad",
});

var tombol = document.getElementById("myBtn");
window.onscroll = function () {
  scrollMode();
};

function scrollMode() {
    tombol.style.display = document.body.scrollTop > 45 || document.documentElement.scrollTop > 45 ? 
                           "block" : "none"
}

tombol.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

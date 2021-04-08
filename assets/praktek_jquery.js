// Vannila JS
document.getElementById("nama").innerHTML = "Arief";

//jQuery

$("#nim").html("20190140015");

$(function () {
  console.log("Hello World");
});

// Kode hide elemen

$("#hide").on("click", function () {
  $("#nama").hide();
});

// Kode show elemen

$("#show").on("click", function () {
  $("#nama").show();
});

// Kode toggle elemen
$("#toggle").on("click", function () {
  $("#nama").toggle();
});

//  Fade in
$("#fade-in").on("click", function () {
  $("#tgl").fadeIn();
});

// Fade out
$("#fade-out").on("click", function () {
  $("#tgl").fadeOut();
});

// Fade toggle
$("#fade-toggle").on("click", function () {
  $("#tgl").fadeToggle();
});

// Slide up
$("#slide-up").on("click", function () {
  $("#img").slideUp();
});

// Slide down
$("#slide-down").on("click", function () {
  $("#img").slideDown();
});

// Slide toggle
$("#slide-toggle").on("click", function () {
  $("#img").slideToggle();
});

// JavaScript Document

// Animatie voor de Header

var oldHeader = document.querySelector("header nav:first-of-type li:first-of-type a");
var newHeader = document.querySelector("header nav:first-of-type li:nth-of-type(2) a");

newHeader.addEventListener("click", newActive);
oldHeader.addEventListener("click", oldActive);

function newActive() {
  newHeader.classList.add("activeAnimation");
  oldHeader.classList.remove("active");
}

function oldActive() {
  oldHeader.classList.add("active");
  newHeader.classList.remove("activeAnimation");
}

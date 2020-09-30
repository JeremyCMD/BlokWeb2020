// JavaScript Document

var activeHeader = document.querySelectorAll("header nav ul li");

activeHeader.addEventListener("click", newActive);

function newActive() {
  activeHeader.classList.toggle("active");
}

window.addEventListener("scroll", visibleHeader)

function visibleHeader() {
  if(window.scrollY > 200){
    
  }
}

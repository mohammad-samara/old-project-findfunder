"use strict";
// import { allProjects } from "./app.js";

var allProjects;
allProjects = JSON.parse(localStorage.getItem("allProjects"));
console.log(allProjects);

var perviewsection = document.getElementById("section2");


  for (var i = 0; i < 3; i++) {
    var div = document.createElement("div");
    div.id = i;
    div.setAttribute('class' , 'styleCards')
    var link = document.createElement("a");
    link.addEventListener("click", redirectToProjectPage);
    link.setAttribute("href", "project-page.html");
    link.setAttribute("id", allProjects[i].id);
    
    var img = document.createElement("img");
    img.setAttribute("src", allProjects[i].image);
    img.setAttribute("class", "imageStyle");
    link.appendChild(img);
    var article = document.createElement("article");
    var h4 = document.createElement("h4");
    h4.textContent = allProjects[i].title;
    article.appendChild(h4);
    var p = document.createElement("p");
    p.setAttribute("class", "card-info");
    p.innerHTML = `<i class="far fa-money-bill-alt"></i> <span id="raised">$${allProjects[i].raised}</span> Raised of <i class="fas fa-bullseye"></i> <span id="goal">$${allProjects[i].goal}</span>`;
    article.appendChild(p);
    link.appendChild(article);
    div.appendChild(link);
    perviewsection.appendChild(div);
  }



function redirectToProjectPage(event) {
  var visted = allProjects.find(checkExistance, this.id);
  localStorage.setItem("visted", JSON.stringify(visted));
}
function checkExistance(e) {
  return e.id == this;
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


// Second slider

var slideIndex2 = 1;
showDivs(slideIndex2);

function plusDivs(n) {
  showDivs(slideIndex2 += n);
}

function showDivs(n) {
  var i;
  var s = document.getElementsByClassName("mySlides2");
  if (n > s.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = s.length}
  for (i = 0; i < s.length; i++) {
     s[i].style.display = "none";  
  }
  s[slideIndex2-1].style.display = "block";  
}
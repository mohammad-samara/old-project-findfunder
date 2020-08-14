"use strict";
var loadInfo2 = JSON.parse(localStorage.getItem("loadInfo"));
var perviewContainer = document.getElementById("projectsPreview");

// this for loop  creats the divs that the project are
// presented in and  it sets them as the event listener
//  when one of the divs(projects) is clicked to takes you
// to an indvisual page that contains all info that relate to it
var categoryName = document.getElementById('catagory-name');
categoryName.textContent = loadInfo2[0].catagory
for (var i = 0; i < loadInfo2.length; i++) {
  var div = document.createElement("div");
  div.id = i;
  var link = document.createElement("a");
  link.addEventListener("click", redirectToProjectPage);
  link.setAttribute("href", "project-page.html");
  link.setAttribute("id", loadInfo2[i].id );
  var img = document.createElement("img");
  img.setAttribute("src", loadInfo2[i].image);
  img.setAttribute("class", "imageStyle");
  link.appendChild(img);
  var article = document.createElement("article");
  var h4 = document.createElement("h4");
  h4.textContent = loadInfo2[i].title;
  article.appendChild(h4);
  var p = document.createElement("p");
  p.innerHTML = `<i class="far fa-money-bill-alt"></i> <span id="raised">$${loadInfo2[i].raised}</span> Raised of <i class="fas fa-bullseye"></i> <span id="goal">$${loadInfo2[i].goal}</span>`;
  article.appendChild(p);
  link.appendChild(article);
  div.appendChild(link);
  perviewContainer.appendChild(div);
}

// this is the function of the prevent listner
// it assigns the object information to an array
// so we can save it in the local storage and use
// it sepratly of the rest of the project in project page
function redirectToProjectPage(event) {
  var visted = loadInfo2.find(checkExistance, this.id);
  localStorage.setItem("visted", JSON.stringify(visted));
}

//  a function to check the existance of an element in the array
function checkExistance(e) {
  return e.id == this;
}



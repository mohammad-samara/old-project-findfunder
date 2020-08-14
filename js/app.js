"use strict";
import { data } from "./dummy-data.js";

var allProjects = [];
var educationArr = [];
var medicalArr = [];
var non_profitArr = [];

// a constructer to make all the data entred to an array of projects.
function ProjectMaker(title, image, goal, name, location, story, catagory) {
  this.title = title;
  this.image = image;
  this.goal = goal;
  this.name = name;
  this.location = location;
  this.story = story;
  this.id = allProjects.length;
  this.catagory = catagory;
  this.raised = 0;
  allProjects.unshift(this);
}
ProjectMaker.prototype.createRandomRaised = function () {
  //generate randomValue for raised
  this.raised = Math.floor(Math.random() * (10000 - 1000) + 1000);
};

checkStoredAllprojects();
filteration();
addToLoalStorage();

// function to check if we already have projects in the store so we dont create projects
function checkStoredAllprojects() {
  if (!localStorage.getItem("allProjects")) {
    console.log("there is none");
    preExisting();
  } else {
    allProjects = JSON.parse(localStorage.getItem("allProjects"));
  }
}

//filtering the projects array to three arrays based on categroy
function filteration() {
  console.log("I called filteration");
  educationArr = allProjects.filter(checkExistance, "Education");
  medicalArr = allProjects.filter(checkExistance, "Medical");
  non_profitArr = allProjects.filter(checkExistance, "Nonprofit");
}

// to add all prjocets array to local storage and to add each catagory array to local storage as well.
function addToLoalStorage() {
  console.log("I called addToLoalStorage");
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
  localStorage.setItem("EducationArr", JSON.stringify(educationArr));
  localStorage.setItem("medicalArr", JSON.stringify(medicalArr));
  localStorage.setItem("non-profitArr", JSON.stringify(non_profitArr));
}

// function that works with filter method of object array
function checkExistance(e) {
  return e.catagory == this;
}

// this function will works on a dummy data that we included. it should take the data and store and create objects and store them to local storage.
function preExisting() {
  for (var i = 0; i < data.length; i++) {
    var preObject = new ProjectMaker(
      data[i].title,
      data[i].image,
      data[i].goal,
      data[i].name,
      data[i].location,
      data[i].story,
      data[i].catagory
    );
    preObject.createRandomRaised();
  }
}

// this adds an envent listner to each option in the catagory  nav
// and it takes you to that page and renders all projects related to
// that catagory .
var dorpDownOptionMedical = document.getElementById("Medical");
dorpDownOptionMedical.addEventListener("click", redirectToMedical);
function redirectToMedical(event) {
  checkStoredAllprojects();
  filteration();
  addToLoalStorage();
  var loadInfo = [];
  loadInfo = JSON.parse(localStorage.getItem("medicalArr"));
  console.log(loadInfo);
  localStorage.setItem("loadInfo", JSON.stringify(loadInfo));
}

var dorpDownOptionEduction = document.getElementById("Education");
dorpDownOptionEduction.addEventListener("click", redirectToEducation);
function redirectToEducation(event) {
  checkStoredAllprojects();
  filteration();
  addToLoalStorage();
  var loadInfo = [];
  loadInfo = JSON.parse(localStorage.getItem("EducationArr"));
  localStorage.setItem("loadInfo", JSON.stringify(loadInfo));
}

var dorpDownOptionnonProfit = document.getElementById("non-profit");
dorpDownOptionnonProfit.addEventListener("click", redirectToNonProfit);
function redirectToNonProfit(event) {
  checkStoredAllprojects();
  filteration();
  addToLoalStorage();
  var loadInfo = [];
  loadInfo = JSON.parse(localStorage.getItem("non-profitArr"));
  localStorage.setItem("loadInfo", JSON.stringify(loadInfo));
}

//Exporting the creation object process
// var projectCreation = {
//     allProjects ,
//      educationArr,
//      medicalArr,
//      non_profitArr,
//      ProjectMaker,
//      filteration,
//      addToLoalStorage
// }

export {
  allProjects,
  educationArr,
  medicalArr,
  non_profitArr,
  ProjectMaker,
  filteration,
  addToLoalStorage,
};



//add event listener to start page button to go to start project page
var startProject =document.getElementsByClassName('start');

for (var i=0 ; i<startProject.length ;i++){
  startProject[i].addEventListener('click',startFunction);
}


function startFunction(event){
  console.log('this is for startpage')
  window.location.href ='start-project.html'
}

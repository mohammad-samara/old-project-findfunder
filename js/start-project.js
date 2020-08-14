"use strict";
//add  event listner to the submit and collect data for
// for the project pages .
import {
  allProjects,
  educationArr,
  medicalArr,
  non_profitArr,
  ProjectMaker,
  filteration,
  addToLoalStorage,
} from "./app.js";

var formData = document.getElementById("project-form");
formData.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  var title = event.target.Title.value;
  var image = event.target.Image.value;
  var goal = Number(event.target.Goal.value).valueOf();
  var name = event.target.Name.value;
  var location = event.target.Location.value;
  var story = event.target.Story.value;
  var selectedIndex = event.target.Catagory.options.selectedIndex;
  var catagory = event.target.Catagory.options[selectedIndex].value;
  console.log(title, image, goal, name, location, catagory, story);
  var project = new ProjectMaker(
    title,
    image,
    goal,
    name,
    location,
    story,
    catagory
  );
  filteration();
  addToLoalStorage();
  localStorage.setItem("visted", JSON.stringify(project));
  window.location.href = "project-page.html";
}

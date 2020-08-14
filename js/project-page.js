"use strict";

// const { allProjects } = require("./app");

// getting the page info from local storage depending
//  on the clicked case on catagory page
var visted = JSON.parse(localStorage.getItem("visted"));

// here we are assigning variables to the id of the tag on the
// html and adding the info of the current project .
var title = document.getElementById("title");
title.textContent = visted.title;

var image = document.getElementById("Img");
image.src = visted.image;

var personName = document.getElementById("name");
personName.textContent = visted.name;

var raised = document.getElementById("raised");
raised.innerHTML = visted.raised;

var personlocation = document.getElementById("location");
personlocation.textContent = visted.location;

var goal = document.getElementById("donate");
goal.textContent = visted.goal;

var story = document.getElementById("story");
story.textContent = visted.story;

// function to get back the wallet from storage
var currentWallet;
// Create an event listener so that when the donate link is clicked, the donateFunction method is invoked.
var donate = document.getElementById("form");
donate.addEventListener("submit", donateFunction);

function donateFunction(event) {
  // Prevent the page from reloading
  // update the amount value
  // save wallate in local storage
  // update the wallet in HTMl
  event.preventDefault();
  //check if you have a wallet

  if (!localStorage.getItem("currentWallet")) {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    //alert("You haven't add a wallet yet");

    return;
  }
  currentWallet = JSON.parse(localStorage.getItem("currentWallet"));
  var donateAmount = Number(event.target.donateValue.value);

  //check if you have enough money in the wallet

  if (donateAmount > currentWallet.amount) {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    //alert("You don't have enough money");

    return;
  }
  currentWallet.amount -= donateAmount;
  //display the new raised
  displayNewRaised(donateAmount);
  updateRaised();
  localStorage.setItem("currentWallet", JSON.stringify(currentWallet));

  //check if we have projectDonateArray in local storage
  if (localStorage.getItem("projectDonateArray")) {
    projectDonateArray = JSON.parse(localStorage.getItem("projectDonateArray"));
  }

  //update the amount of donate for elemnts in projectDonateArray
  updateAmount(donateAmount);

  localStorage.setItem("projectDonateArray", JSON.stringify(projectDonateArray));
  updatewallets();


}

var raisedNum = parseInt(raised.textContent);
//function to display the new raised in the page
function displayNewRaised(donateAmount) {
  raisedNum += donateAmount;
  raised.textContent = raisedNum;
}

// function to update the new raised in the local storage
function updateRaised() {
  visted.raised = raisedNum;
  localStorage.setItem("visted", JSON.stringify(visted));
  var projectsArr = JSON.parse(localStorage.getItem("allProjects"));
  for (var i = 0; i < projectsArr.length; i++) {
    if (projectsArr[i].id == visted.id) {
      projectsArr[i] = visted;
    }
  }
  localStorage.setItem("allProjects", JSON.stringify(projectsArr));
}

//function to find object that have id match the id we passed
function checkForObject(e) {
  return e.id == this;
}

// creat new arry
var projectDonateArray = [];
//check if there is project array in storage

if (localStorage.getItem("projectDonateArray")) {
  projectDonateArray = JSON.parse(localStorage.getItem("projectDonateArray"));
}

//Project Donate Constructor
function ProjectDonate(obj, donateAmount) {
  this.id = obj.id;
  this.title = obj.title;
  this.name = obj.name;
  this.amount = donateAmount;
  projectDonateArray.push(this);
}

function updateAmount(donateAmount) {
  if (projectDonateArray.some((e) => e.id === visted.id)) {
    /* projectDonateArray contains the element we're looking for */

    //edit amount for the element if we have it in projectDonateArray
    console.log(localStorage.getItem("projectDonateArray"));
    for (var i = 0; i < projectDonateArray.length; i++) {
      if (projectDonateArray[i].id == visted.id) {
        projectDonateArray[i].amount += donateAmount;
      }
    }
  }

  //if we don't have the element in projectDonateArray go and creat it
  else {
    var newProjectDonate = new ProjectDonate(visted, donateAmount);


  } localStorage.setItem("projectDonateArray", JSON.stringify(projectDonateArray));
}




//function to updat the wallet in wallets array
function updatewallets() {
//seclect the wallet from wallets array and update it
  var walletsArray = JSON.parse(localStorage.getItem("walletsArray"));
  for (var i = 0; i < walletsArray.length; i++) {
    if (walletsArray[i].name == currentWallet.name) {
      walletsArray[i].amount = currentWallet.amount;
    }
  }
 
  localStorage.setItem("walletsArray", JSON.stringify(walletsArray));
}


'use strict'



var formCreat = document.getElementById('formCreat');
var formUser = document.getElementById('formUser');
var formOption = document.getElementById('walletOptions');
var logIn = document.getElementById('login');




//event listener to creat new wallet 
formCreat.addEventListener('submit', formCreatFunction);


function formCreatFunction(event) {

    event.preventDefault();
    // creat inputs field to creat wallet
    formUser.innerHTML = `<input id="inputName"  type="input" placeholder="Input your name" > <br>`

    formUser.innerHTML += `<input id="submitCreat"  type="submit" value="Submit" > <br>`

}





//check if I have wallets array in storage



//event listener to creat new wallet and input the new name

formUser.addEventListener('submit', inputname);
function inputname(event) {

    event.preventDefault();
    if (localStorage.getItem('walletsArray')) {

        getMyWallet();
    }
    var name = event.target.inputName.value;
    var CreatWalletnew = new CreatWallet(name);
    console.log(name);
    saveMyWallet();
    {
               // Get the modal
    var modal = document.getElementById("myModal2");

    // Get the button that opens the modal
   // var btn = document.getElementById("myBtn");

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

}



var currentWallet = [];

//event listener to creat new wallet and input the new name

logIn.addEventListener('submit', functionlogin);
function functionlogin(event) {

    if (localStorage.getItem('walletsArray')) {
        getMyWallet();
    }


    event.preventDefault();

    var username = event.target.loginName.value;
    if (walletsArray.some(e => e.name === username)) {
        /* walletsArray contains the element we're looking for */

        //make the current value the choosing one from all wallets

        for (var i = 0; i < walletsArray.length; i++) {
            if (walletsArray[i].name == username) {
                currentWallet = walletsArray[i];
                

                window.location.href ="wallet.html"
                saveMyWallet();
                updatewallets();
            }
        }
   
    }

    else {
       // alert('you don\'t have wallet')
           // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
   // var btn = document.getElementById("myBtn");

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
    //  console.log(name);
    console.log(currentWallet);
    saveMyWallet();
    updatewallets();

    
}


//function to save wallets

function saveMyWallet() {
    localStorage.setItem('walletsArray', JSON.stringify(walletsArray));
    localStorage.setItem('currentWallet', JSON.stringify(currentWallet));
}

//function to get wallets
function getMyWallet() {
    walletsArray = JSON.parse(localStorage.getItem('walletsArray'));
}





var walletsArray = [];
//Constructor for wallet
function CreatWallet(name) {
    this.name = name;
    this.amount = 0;
    walletsArray.push(this);
}

//function to updat the wallet in wallets array
function updatewallets() {

    //seclect the wallet from wallets array and update it
    JSON.parse(localStorage.getItem("walletsArray"));
    for (var i = 0; i < walletsArray.length; i++) {
        if (walletsArray[i].name == currentWallet.name) {
            walletsArray[i].amount = currentWallet.amount;
        }
    }
    //  }
    localStorage.setItem("walletsArray", JSON.stringify(walletsArray));
}
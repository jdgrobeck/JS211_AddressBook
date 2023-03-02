# JS211_AddressBook

Whiteboard your app
Make a code plan
Pseudo code and then translate to JavaScript

DONE Create a new repo (name it descriptively well), clone it to your local machine and share it with your partner
DONE Open the directory and create an index.html and main.js file to 

fetch a user and display them one at at time

Use the API: https://randomuser.me/api/ to fetch a user now
    function to perform basic fetch

Fetch a new user multiple times and store them in an array
function:
    variable for the fetches
    call fetch n number of times
    add results to variable
    fetch/add, fetch/add, ....


Then list out all the users in your address book array by name and picture
function:
    map() results.name.first and results.picture.(picture size)
    loop

Figure out how to fetch multiple users in one fetch request
main function:
    https://randomuser.me/api/?results=10


Fetch multiple users on window load
    window.onload = function() {
    mainFunction()
}

First line of main.js

Add a button to each user that when clicked displays the rest of their information 
like DOB, address and so forth

function "moreInformation"

in js, create a button element and put below function
create eventListener to change the button to show/hide extra info

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

    onClick above fetch request for .dob, .location, .cell


Once you have the functionality working, feel free to style and structure your address book with CSS and HTML
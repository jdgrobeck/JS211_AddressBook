window.onload = function() {
    getContacts()
}


// fetch a user and display them one at at time

let addressList = document.getElementById("container");

const API = 'https://randomuser.me/api/?results=5';

const getContacts = () => {   
    fetch(API)
    .then(res => {
      if(!res.ok) {
        throw Error(res.statusText)
      } return res.json()
    })
    .then(data => people = data.results)
    .catch(err => console.log(`Error,  ${err}`))
    
    .then(people => { people.map((person, i) => {
      console.log(person, i)
        let html = ` 
          <div id="allInfo">
          <div id="initialInfo">
        <h4>${person.name.first} ${person.name.last}</h4>
        <img src = "${person.picture.large}">
          </div>
        
        <div class="moreInfo" id="${person.login.uuid}-person">
          Email: ${person.email} <br> 
          Phone: ${person.phone} <br>
          Address: ${person.location.street.number} ${person.location.street.name}<br>
                  ${person.location.city}, ${person.location.state}, ${person.location.country}, ${person.location.postcode}
        </div>
        </div>
        <button id="${person.login.uuid}" onclick="showHide(this)">More Info</button>
        

                    
                    `;
       
                  


             // I want to put the hide/display the moreInfo div with the button
             // Button is working for first entry but not others
             // How do I target each person?
             
             
                    
        

        addressList.insertAdjacentHTML("afterbegin", html);
        
        }) // } end of callback in map, ) end map function
    }) // } end people function, ) end .then definition
}  // // end getContacts
   
const showHide = (button) => {
  let x = document.getElementById(button.id+"-person")
if (x.style.display === "none" || !x.style.display) {
  x.style.display = "block";
  button.innerText = "Less Info"
  
} else {
  x.style.display = "none";
  button.innerText = "More Info"
}
}






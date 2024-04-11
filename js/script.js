
// ----SCROLL EFFECTS --------------------------------
ScrollReveal().reveal('[data-scroll]', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    reset: true
});


// ---- MENU BAR----
let closeBtn = document.getElementById('closeBtn');
let menuBtn = document.getElementById('menuBtn');
let show = document.getElementById("nav-links");


menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);


function openMenu(){
    
    show.style.right = "0";
}


function closeMenu(){
    
    show.style.right = "-200px";
}



// -- EMAIL CODE

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  // Extract the rating value from the formData object
  const rating = formData.get('rating');

  // Now you can include the rating value in the JSON data to be sent

  fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: json
      })
      .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
              result.innerHTML = json.message;
          } else {
              console.log(response);
              result.innerHTML = json.message;
          }
      })
      .catch(error => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
      })
      .then(function() {
          form.reset();
          setTimeout(() => {
              result.style.display = "none";
          }, 3000);
      });
});

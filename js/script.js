

ScrollReveal().reveal('[data-scroll]', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    reset: true
});



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


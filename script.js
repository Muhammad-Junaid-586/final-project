

// ================= Navbar toggle icon ======================//
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = ()=>{
        menuIcon.classList.toggle("fa-xmark");
        navbar.classList.toggle('active');
    }

// ================= Scroll Selection active link ======================//
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.screenY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // -----------Sticky Header---------------//
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);


    // ===============Remove toggle icon when clicked navbar link==============//
    menuIcon.classList.remove("fa-xmark");
        navbar.classList.remove('active');  
};

// ====================Scroll Reveal==========================//
ScrollReveal({
    reset : true,
    distance : '80px',
    duration : 2000,
    delay : 200

});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

// ====================typed js==========================//
const typed = new Typed('.multiple-text',{
    strings : ['Frontent Developer' , 'Youtuber' , 'Wordpress Developer'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})




// ============= Source Code =============== //
document.querySelector('.close').addEventListener('click', function (e) {
    e.preventDefault();
    e.target.parentNode.style.display = 'none';
    
});
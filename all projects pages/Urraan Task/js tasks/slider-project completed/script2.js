



let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('nxt');
let currentSlide = 0;

let manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    });
});

let nextSlide = function() {
    currentSlide = (currentSlide + 1) % slides.length;
    manualNav(currentSlide);
};

let prevSlide = function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    manualNav(currentSlide);
   
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);




// let index = 0;

// showImg(0);
// function showImg(i) {
//     if(typeof i === 'number'){

//         index += i;
//     }else{
//         index = i;
//     }


//     console.log(index);
//     let imagesDivs = document.querySelectorAll('.slide');
//     let dots = document.querySelectorAll('btn');
   

//     for (let i = 0; i < imagesDivs.length; i++) {
        
//         // imagesDivs[i].style.display = 'none';
//         imagesDivs[i].classList.remove('active');
        
//     }

//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace('active', "")
        
//     }

//     if (index >= imagesDivs.length) {
//         index = 0;
//     }

//     if (index < 0) {
//         index = imagesDivs.length -1;
//     }

//     imagesDivs[index].style.display = 'block';
//     dots[index].className += ' active';
// }



// let nextBtn = document.getElementById('nxt');
// nextBtn.addEventListener('click', ()=>{
//     showImg(1)
// })


// let prevBtn = document.getElementById('prev');
// prevBtn.addEventListener('click', ()=>{
//     showImg(-1)
// })
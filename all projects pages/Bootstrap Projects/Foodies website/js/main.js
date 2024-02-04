
// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop >20) {
        nav.classList.add('scroll-on');
    }else{
        nav.classList.remove('scroll-on');
    }
}



// nav hide

// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse')
// navBar.forEach(a){
//     a.addEventListener('click' , function(){
//         navCollapse.classList.remove('show');
//     })
// }


let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(a => {
    a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
    });
});


// section counter
// document.addEventListener('DOMContentLoaded', ()=>{
//     function counter(id,start,end,duration){;
//     let object = document.getElementById(id);
//     current = start;
//     range = end-start;
//     increment = end > start ? 1 : -1;
//     step = Math.abs(Math.floor(duration/range));
//     timer = setInterval(()=>{
//         current += increment;
//         object.textContent = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     },step);
// };

// counter('count1',0,1287,3000);
// counter('count2',0,5787,2500);
// counter('count3',0,1450,3000);
// counter('count4',0,8820,3000);
// })

document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration) {
        let object = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));
        let timer = setInterval(() => {
            current += increment;
            object.textContent = current;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                clearInterval(timer);
            }
        }, step);
    }

    counter('count1', 0, 1287, 3000);
    counter('count2', 0, 5787, 2500);
    counter('count3', 0, 1450, 3000);
    counter('count4', 0, 8820, 3000);
});

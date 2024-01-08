// let hrs = document.querySelector('#hrs');
// let min = document.getElementById('min');
// let sec = document.getElementById('sec');
// let ampm = document.getElementById('ampm');

// setInterval(() => {
//     let currentTime = new Date();
//      if(currentTime.getHours()>12) {
//         hrs.innerHTML = 1;
//     }else{
//         hrs.innerHTML = (currentTime.getHours()<10 ? '0' : '')+ currentTime.getHours();
//     };
//     min.innerHTML = (currentTime.getMinutes()<10 ? '0' : '')+ currentTime.getMinutes();
//     sec.innerHTML = (currentTime.getSeconds()<10 ? '0' : '')+ currentTime.getSeconds();
// }, 1000);


let hrs = document.querySelector('#hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');

setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    
    if (hours > 12) {
        hours -= 12;
        ampm.innerHTML = ` PM`;
    } else {
        ampm.innerHTML = ` AM`;
    }

    hrs.innerHTML = (hours < 10 ? '0' : '') + hours;
    min.innerHTML = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
}, 1000);

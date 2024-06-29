let result = document.querySelector(".para");
// let DateInp = document.querySelector('.date-input').value;
let input = document.querySelector(".input");
let mnt = document.querySelector('.minute');
let sec = document.querySelector('.second');
let hrs = document.querySelector('.hours');

let Button = document.querySelector('.clcbtn');



function showData() {
   
   let hours = input.value;
   let seconds = hours * 60 *60 ;
console.log(seconds);
result.innerHTML = `${hours} contains ${seconds} seconds`;


    
}


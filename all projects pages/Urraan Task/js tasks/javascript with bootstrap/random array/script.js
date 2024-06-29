
let arr = [];
function generateRandomArr(length) {

   
    for (let i = 0; i < length; i++) {
        
        arr.push(parseInt(Math.random()*100));
        console.log(arr);
    }
    let first = arr[0];
    let second = arr[(arr.length-1)];
    console.log(first , second);
    // return finalValue = first , second;
}
// let input = document.querySelector(".input");
// let Button = document.querySelector('.btn');
// let myNumber = input.value;
// let myArray = generateRandomArr(myNumber);

// Button.addEventListener('click', ()=>{
//     generateRandomArr(myNumber)
// })
let myNumber = 6;
generateRandomArr(myNumber)



// function getNumber() {
//     let getFirstLast = generateRandomArr(myNumber);
//     let first = getFirstLast[0];
//     let second = getFirstLast.length-1;
//     console.log(first , second);
// }

// getNumber();
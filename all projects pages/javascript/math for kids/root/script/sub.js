let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let audio = document.getElementById('myAudio');
let audio2 = document.getElementById('myAudio2');

let answer = 0;

function generate_equation() {
    let num1 = Math.floor(Math.random()*13);
    let num2 = Math.floor(Math.random()*13);
    let dummyAnswer1 = Math.floor(Math.random()*13);
    let dummyAnswer2 = Math.floor(Math.random()*13);
    let allAnswer = [];
    let switchAnswer = [];


    answer = num1 - num2;

    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;

    allAnswer = [answer,dummyAnswer1,dummyAnswer2];
    for (let i = allAnswer.length; i--;) {
    switchAnswer.push(allAnswer.splice(Math.floor(Math.random()*(i+1)),1)[0]);
        
    }

    option1.innerHTML = switchAnswer[0];
    option2.innerHTML = switchAnswer[1];
    option3.innerHTML = switchAnswer[2];

}

option1.addEventListener('click', ()=>{
    if (option1.innerHTML == answer) {
        audio2.play();
        generate_equation();
    } else {
        audio.play();
    }
});
option2.addEventListener('click', ()=>{
    if (option2.innerHTML == answer) {
        audio2.play();
        generate_equation();
    } else {
        audio.play();
    }
});
option3.addEventListener('click', ()=>{
    if (option3.innerHTML == answer) {
        audio2.play();
        generate_equation();
    } else {
        audio.play();
    }
});
generate_equation();
let result = document.querySelector(".para");
let DateInp = document.querySelector('.date-input').value;
let input = document.getElementById("inp");
let mins = document.querySelector('.minute');
let sec = document.querySelector('.second');
let hours = document.querySelector('.hours');

let Button = document.querySelector('.clcbtn');



function showData() {
    // result.innerHTML = input.value;
    // let fullDate = input.value;
    // console.log(fullDate);
    // let date = fullDate.split('-');
    // console.log(date);
    // const year = fullDate.getFullYear();
    // console.log(year);
    // for (let i of date) {
    //     console.log(date[i]);
    // }

    // its working fine
    // for (let i = 0; i < date.length; i++) {
    //    let toInt = parseInt(date[i]);
    //    console.log(toInt);
        
    // }
    // let currentDate = new Date();
    // console.log(currentDate.toLocaleDateString());

    // let date = new Date(parseInt(fullDate));
    // let year = date.getFullYear;
    // console.log(year);
    let birthDay = new Date(input.value);

    let d1 = birthDay.getDate();
    let m1 = birthDay.getMonth()+1;
    let y1 = birthDay.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();



    let y3,m3,d3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1 ;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getdaysInMonth(y1,m1) + d2 - d1;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }

    console.log(d3,m3,y3);
    let totalDays = y3 * 365 + m3 * 31 + d3;
    result.innerHTML = `${totalDays} days years old`;

    let totalHours = totalDays * 24;
    // console.log(totalHours);
    hours.innerHTML = `${totalHours} Hours`;

    let totalMins = totalHours  * 60;
    // console.log(totalMins);
    mins.innerHTML = `${totalMins} Minutes`;

    let totalSec = totalMins * 60 ;
    // console.log(totalSec);
    sec.innerHTML = `${totalSec} Seconds`;


    
}

function getdaysInMonth(year,month) {
        return new Date(year,month,0).getDate();
}
// let nameText = document.querySelector('.nameText');
// let emailText = document.querySelector('.emailText');
// let orgText = document.querySelector('.orgText');

// let nameInp = document.querySelector('.nameInp');
// let SubmitBtn = document.querySelector('.last-btn');

// let emailInp = document.querySelector('.emailInp');
// let form = document.querySelector('form');
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
// })


// // nameText.innerHTML = "Welcome to javascript"
// // emailText.innerHTML = "Welcome to javascript"
// SubmitBtn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     nameValidate();
//     emailValidate();
// })

// function nameValidate() {
//     let nameReg = /^[A-Z][a-zA-Z0-9\s]+$/
//     let inputValue = nameInp.value;

//     console.log(inputValue);
//     if(nameReg.test(inputValue)){
//         nameText.innerHTML = 'Good!';
//         nameText.style.color = "green";
        
//     }
//     else{
//         nameText.innerHTML = 'Invalid! First Letter Should Be Capital';
//         nameText.style.color = "Red";
//         // nameText.style.fontSize = "30px"
//         console.log(nameInp);
//     }
// }


// // console.log(emailInp.value);
// function emailValidate() {
//     let emailValue = emailInp.value;
//     let emailReg = /^([a-zA-Z0-9_-]+)@([a-zA-Z0-9]+).([a-zA-Z]+)$/;

//     if (emailReg.test(emailValue)) {
//         emailText.innerHTML = "Good!";
//         emailText.style.color = "green";
//         console.log('valid email');
//     }
//     else{
//         emailText.innerHTML = "Invalid! Please Enter Valid Email";
//         emailText.style.color = "Red";
//         console.log('invalid email');
//     }
// }




let nameText = document.querySelector('.nameText');
let emailText = document.querySelector('.emailText');
let orgText = document.querySelector('.orgText');

let nameInp = document.querySelector('.nameInp');
let emailInp = document.querySelector('.emailInp');
let orgInp = document.querySelector('.orgInp');
let SubmitBtn = document.querySelector('.last-btn');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Uncomment these lines to test the elements
// nameText.innerHTML = "Welcome to javascript"
// emailText.innerHTML = "Welcome to javascript"

SubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nameValidate();
    emailValidate();
    orgValidate();
});

function nameValidate() {
    let nameReg = /^[A-Z][a-zA-Z0-9\s]+$/;
    let inputValue = nameInp.value;

    if (nameReg.test(inputValue)) {
        nameText.innerHTML = 'Good!';
        nameText.style.color = "green";
    } else {
        nameText.innerHTML = 'Invalid! First Letter Should Be Capital';
        nameText.style.color = "Red";
    }
}

function emailValidate() {
    let emailValue = emailInp.value;
    // Improved regex for email validation
    let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailReg.test(emailValue)) {
        emailText.innerHTML = "Good!";
        emailText.style.color = "green";
    } else {
        emailText.innerHTML = "Invalid! Please Enter Valid Email(jun@gmail.com)";
        emailText.style.color = "Red";
    }
}

function orgValidate() {
    let orgReg = /^[A-Za-z0-9\s]+$/;
    let orgValue = orgInp.value;

    if (orgReg.test(orgValue)) {
        orgText.innerHTML = 'Valid Organization Name!';
        orgText.style.color = "green";
    } else {
        orgText.innerHTML = 'Invalid Organization Name!';
        orgText.style.color = "red";
    }
}




let textAreaDivs = document.querySelectorAll('.textAreaDiv');

textAreaDivs.forEach((textAreaDiv)=>{
    let textArea = textAreaDiv.querySelector('textarea');
    let textAreaText = textAreaDiv.querySelector('.textAreaText');

    textArea.addEventListener('blur',()=>{

    let textAreaReg = /^[a-zA-Z0-9@#$%&\.;\s]{15,200}$/;
    let textAreaValue = textArea.value;
    if (!textAreaValue == "") {
        textArea.style.border = "1px solid green";
        textArea.style.backgroundColor = "transparent"
        console.log('text ara is emply');
        if (textAreaReg.test(textAreaValue)) {
            console.log('good Job');
            textAreaText.innerHTML = 'Good Job!';
        }else{
            console.log('bad job');
            textAreaText.innerHTML = 'Bad Job'
        }
    }
    else{
        textArea.style.border = "1px solid red";
        textArea.style.backgroundColor = "maroon";
    }
})});
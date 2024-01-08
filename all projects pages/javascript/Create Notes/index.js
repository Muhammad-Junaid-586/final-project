let notesContainer = document.querySelector('.notes-container');
let createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();
function updateNotes() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        // let choise = prompt('Are You Want To Delete');
        // if (choise == 'ok' || choise == 'yes') {

        //     e.target.parentElement.remove();
        // }

        // -------- Extra ---------//
        let popup = document.getElementById('popup');
        popup.classList.add('open-popup');
        let btn = document.querySelector('#btn');
        let btnN = document.querySelector('#btnN')
        btn.addEventListener('click', () => {
            popup.classList.remove('open-popup');
            e.target.parentElement.remove();
        });
        btnN.addEventListener('click',()=>{
            popup.classList.remove('open-popup');
        });




        updateNotes();
    } else if (e.target.tagName === 'P') {
        let notes = document.querySelectorAll('.input-box');
        notes.forEach((notes) => {
            notes.onkeyup = function () {
                updateNotes();
            }
        })
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})



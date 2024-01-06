let toDoItems = document.getElementsByClassName('to-do-item')[0];
let input = document.getElementById('input');
let trashIcon = document.getElementById('trash');

input.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        addItem();
    }
})

function addItem() {
    let divParent = document.createElement('div');
    let divChild = document.createElement('div');
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');

    divParent.className = 'item';
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener('click', function () {
        checkIcon.style.color = 'limegreen';
    })
    divChild.appendChild(checkIcon);

    trashIcon.className = 'fas fa-trash';
    trashIcon.style.color = 'darkgray';
    trashIcon.addEventListener('click', function () {
        divParent.remove();
    });
    divChild.appendChild(trashIcon);


    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}
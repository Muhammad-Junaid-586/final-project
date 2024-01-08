let container2 = document.querySelector('.container2');
let container3 = document.querySelector('.container3');
let checkIcon = document.getElementById('check-icon');
let xIcon = document.getElementById('x-icon');
let i = 0;

xIcon.addEventListener('click', function () {
    typeNote();
});

checkIcon.addEventListener('click', function () {
    createNote();
});

function typeNote() {
    if (container3.style.display == 'none') {
        container3.style.display = 'block';
    }else{
        container3.style.display = 'none';
    }
};
function createNote() {
    let noteText = document.getElementById('note-text').value;
    let node1 = document.createElement('div');
    let node2 = document.createElement('h2');

    node2.innerHTML = noteText;

    node2.setAttribute('style', 'width:250px; height : 250px; font-size:26px;padding:25px;margin-top:10px;overflow:hidden;box-shadow:0 10px 24px 0px rgba(0,0,0,0.75)');
    node2.style.margin = margin();
    node2.style.transform = rotate();
    node2.style.background = color();

    node1.appendChild(node2);

    

    container2.insertAdjacentElement('beforeend', node1);

    node1.addEventListener('mouseenter', function () {
        node1.style.transform = 'scale(1.1)';
    })
    node1.addEventListener('mouseleave', function() {
        node1.style.transform = 'scale(1)';
    })

    node1.addEventListener('dblclick', function () {
        node1.remove();
    })
    document.getElementById('note-text').value = '';

}


function margin() {
   let random_margin = ['-5px', '1px', '5px', '10px', '15px', '20px'];
   return random_margin[Math.floor(Math.random()*random_margin.length)]

}
function rotate() {
   let random_rotate = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-3deg)', 'rotate(-1deg)', 'rotate(-5deg)', 'rotate(-10deg)'];
   return random_rotate[Math.floor(Math.random()*random_rotate.length)]

}

function color() {
    let random_color = ['#c2ff3d', '#ff3de8','#3dc2ff', '#04e022', '#bc83e6', '#ebb328'];
    // return random_color[Math.floor(Math.random()*random_color.length)];

    if (i>random_color.length-1) {
        i = 0;
    }
    return random_color[i++];
}

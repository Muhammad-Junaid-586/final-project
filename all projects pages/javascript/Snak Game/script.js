const grid = document.querySelector('.grid');
const startBtn = document.getElementById('start');
const scoreDisplay = document.getElementById('score');
let squares = [];
let currentSnake = [2,1,0];
let direction = 1;
const width = 10;
let appleIndex = 0;
let score = 0;
let intervalTime = 1000;
let speed = 0.9;
let timerId = 0;

function createGrid() {
        for (let i = 0; i < width*width; i++) {
            let square = document.createElement('div');
            // console.log(square);
            
            square.classList.add('square');
            grid.appendChild(square);
            squares.push(square);
        }
        // console.log(squares);
    }

createGrid();


currentSnake.forEach((index)=>{
    squares[index].classList.add('snake');
})

function startGame() {
    // remove the snake
    currentSnake.forEach(index=> {
        squares[index].classList.remove('snake');
    });
    // remove the apple
    squares[appleIndex].classList.remove('apple');

    setInterval(timerId);
    currentSnake = [2,1,0];
    score = 0;
    // re add new score to a browser
    scoreDisplay.textContent = score;
    intervalTime = 1000;
    direction = 1;
    generatApple();
    currentSnake.forEach(index=> {
        squares[index].classList.add('snake');
    });
    timerId = setInterval(move,intervalTime);
}

function move() {
    if (
        (currentSnake[0] + width >= width*width && direction === width)|| //if snake hit the bottom
        (currentSnake[0] % width === width-1 && direction === 1) || //if snake hit the right
        (currentSnake[0] % width === 0 && direction === -1) || //if snake hit the left
        (currentSnake[0] - width < 0 && direction === -width) || //if snake hit the top
        squares[currentSnake[0] + direction].classList.contains('snake')
    ) {
      return  clearInterval(timerId);
      
    }




    const tail =  currentSnake.pop();
    // console.log(tail);
    // console.log(currentSnake);

    squares[tail].classList.remove('snake');

    currentSnake.unshift(currentSnake[0] + direction);
    // console.log(currentSnake);


    // deal with snake head getting apple
    if (squares[currentSnake[0]].classList.contains('apple')) {
        squares[currentSnake[0]].classList.remove('apple');

        // grow the snake by adding snake class
        squares[tail].classList.add('snake');
        // console.log(tail);
        // grow the array
        currentSnake.push(tail);
        // console.log(currentSnake);
        // Generate apple
        generatApple();
        // add score
        score++;
        // display score
        scoreDisplay.textContent = score;

        // increase speed;
        clearInterval(timerId);
        intervalTime = intervalTime * speed;
        timerId = setInterval(move,intervalTime);

    }






    squares[currentSnake[0]].classList.add('snake');
}

// move();

// let timerId = setInterval(move,intervalTime);


function generatApple() {
    do {
        appleIndex = Math.floor(Math.random()*squares.length)
    } while (squares[appleIndex].classList.contains('snake'));
    squares[appleIndex].classList.add('apple');
}

generatApple();


function control(e) {
    if (e.keyCode === 39) {
        console.log('right pressed');
        direction = 1;
    } else if (e.keyCode === 38) {
        console.log('up pressed');
        direction = -width;
    } else if (e.keyCode === 37) {
        console.log('Left pressed');
        direction = -1;
    } else if (e.keyCode === 40) {
        console.log('down pressed');
        direction = +width;
    }
};

document.addEventListener('keyup', control);
startBtn.addEventListener('click', startGame);
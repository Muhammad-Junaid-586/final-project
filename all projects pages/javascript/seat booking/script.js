let container = document.querySelector('.container');
let seats  = document.querySelectorAll('.row .seat:not(.occupied)');
let count = document.querySelector('#count');
let total = document.querySelector('#total');
let movieSelect = document.querySelector('#movie');

let ticketPrice = +movieSelect.value;
populateUi();

//========= Save Selected Movie index & Price ============//
function setMovieData(movieIndex,moviePrice) {
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// console.log(ticketPrice);

// =============Update Count & Total ===============//
function updateSelectedCount() {
    let selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats);

    let seatsIndex = [...selectedSeats].map(function (seat) {
        return [...seats].indexOf(seat);
    });

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    let selectedSeatsCount = selectedSeats.length;
    // console.log(selectedSeatsCount);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice;
}

movieSelect.addEventListener('change', function (e) {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    // console.log(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})




container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        // console.log(e.target);
        e.target.classList.toggle('selected')
    }
    updateSelectedCount();
})

//======= Get data from localstorage & populate the ui========//
function populateUi() {
    let selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    // console.log(selectedSeats);
    if (selectedSeats != null && selectedSeats.length>0) {
        seats.forEach((seat,index)=>{
            if (selectedSeats.indexOf(index)>-1) {
                seat.classList.add('selected');
            }
        })
    }
    let selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex != null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

updateSelectedCount();
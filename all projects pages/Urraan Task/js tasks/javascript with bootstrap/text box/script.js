document.getElementById('first').addEventListener('input' , calculateResult);
document.getElementById('second').addEventListener('input', calculateResult);


function calculateResult() {
    var firstNumber = document.getElementById('first').value;
    var secondNumber = document.getElementById('second').value;

    let total = parseFloat(firstNumber) + parseFloat(secondNumber);
    var result = document.getElementById('result').value = total;
}
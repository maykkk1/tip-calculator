const btn5 = document.getElementById('btn-5%');
const btn10 = document.getElementById('btn-10%');
const btn15 = document.getElementById('btn-15%');
const btn25 = document.getElementById('btn-25%');
const btn50 = document.getElementById('btn-50%');

btn5.addEventListener('click', function(event){
    calculate(5)
});

btn10.addEventListener('click', function(event){
    calculate(10)
});

btn15.addEventListener('click', function(event){
    calculate(15)
});

btn25.addEventListener('click', function(event){
    calculate(25)
});

btn50.addEventListener('click', function(event){
    calculate(50)
});


function calculate(percentage) {
    const numeroDePessoas = parseInt(document.getElementById('number-of-people').value);
    const bill = parseFloat(document.getElementById("bill-value").value);
    const total = (((percentage * bill)/100) + bill)/numeroDePessoas
    const tipAmount = ((percentage * bill)/100)/numeroDePessoas
    document.getElementById('total-value').innerHTML = `$${total.toFixed(2)}`
    document.getElementById('tip-amount-value').innerHTML = `$${tipAmount.toFixed(2)}`
}

const btnReset = document.getElementById('btn-reset'); 

btnReset.addEventListener('click', reset)

function reset () {
    document.getElementById('total-value').innerHTML = '$0.00'
    document.getElementById('tip-amount-value').innerHTML = '$0.00'
    document.getElementById('number-of-people').value = ''
    document.getElementById("bill-value").value = ''
}
const btn5 = document.getElementById('btn-5%');
const btn10 = document.getElementById('btn-10%');
const btn15 = document.getElementById('btn-15%');
const btn25 = document.getElementById('btn-25%');
const btn50 = document.getElementById('btn-50%');
const custom = document.getElementById('custom');
const numOfPeopleActivate = document.getElementById('number-of-people');
const billActivate = document.getElementById('bill-value');

btn5.addEventListener('click', function (event) {
    calculate(5)
});

btn10.addEventListener('click', function (event) {
    calculate(10)
});

btn15.addEventListener('click', function (event) {
    calculate(15)
});

btn25.addEventListener('click', function (event) {
    calculate(25)
});

btn50.addEventListener('click', function (event) {
    calculate(50)
});


custom.addEventListener('change', calculateWithNumberOfPeopleActivate);

numOfPeopleActivate.addEventListener('change', calculateWithNumberOfPeopleActivate);

billActivate.addEventListener('change', calculateWithNumberOfPeopleActivate);

function calculate(percentage) {
    document.getElementById('custom').value = 'custom'
    const numeroDePessoas = parseInt(document.getElementById('number-of-people').value);
    const bill = parseFloat(document.getElementById("bill-value").value);
    if (numeroDePessoas == 0) {
        document.getElementById('cant-be-zero').style.display = 'block';
        document.getElementById("number-of-people").style.border = "1px solid red";
    } else {
        if (isNaN(bill) || isNaN(numeroDePessoas) || isNaN(percentage)) {
            document.getElementById("number-of-people").style.border = "none";
            document.getElementById('cant-be-zero').style.display = 'none';
        } else {
            document.getElementById("number-of-people").style.border = "none";
            document.getElementById('cant-be-zero').style.display = 'none';
            const total = (((percentage * bill) / 100) + bill) / numeroDePessoas
            const tipAmount = ((percentage * bill) / 100) / numeroDePessoas
            document.getElementById('total-value').innerHTML = `$${total.toFixed(2)}`
            document.getElementById('tip-amount-value').innerHTML = `$${tipAmount.toFixed(2)}`
        }
    }
}


function calculateWithNumberOfPeopleActivate() {
    const numeroDePessoas = parseInt(document.getElementById('number-of-people').value);
    const bill = parseFloat(document.getElementById("bill-value").value);
    const percentage = parseInt(document.getElementById('custom').value);
    if (numeroDePessoas == 0) {
        document.getElementById('cant-be-zero').style.display = 'block';
        document.getElementById("number-of-people").style.border = "1px solid red";
    } else { if (isNaN(bill) || isNaN(percentage) || isNaN(numeroDePessoas)) {
        document.getElementById("number-of-people").style.border = "none";
        document.getElementById('cant-be-zero').style.display = 'none';
        pass
    } else {
        document.getElementById("number-of-people").style.border = "none";
        document.getElementById('cant-be-zero').style.display = 'none';
        const total = (((percentage * bill) / 100) + bill) / numeroDePessoas
        const tipAmount = ((percentage * bill) / 100) / numeroDePessoas
        document.getElementById('total-value').innerHTML = `$${total.toFixed(2)}`
        document.getElementById('tip-amount-value').innerHTML = `$${tipAmount.toFixed(2)}`
    }
    }
}





const btnReset = document.getElementById('btn-reset');

btnReset.addEventListener('click', reset)

function reset() {
    document.getElementById("number-of-people").style.border = "none";
    document.getElementById('cant-be-zero').style.display = 'none';
    document.getElementById('total-value').innerHTML = '$0.00'
    document.getElementById('tip-amount-value').innerHTML = '$0.00'
    document.getElementById('number-of-people').value = ''
    document.getElementById("bill-value").value = ''
    document.getElementById('custom').value = 'custom'
}






const custom = document.getElementById('custom');
const numOfPeopleActivate = document.getElementById('number-of-people');
const billActivate = document.getElementById('bill-value');
let percentageBtn = 0
const btn5 = document.getElementById('btn-5%');
const btn10 = document.getElementById('btn-10%');
const btn15 = document.getElementById('btn-15%');
const btn25 = document.getElementById('btn-25%');
const btn50 = document.getElementById('btn-50%');




btn5.addEventListener('click', function (event) {
    changePercentageBtn(5)
});
btn5.addEventListener('click', calculate)


btn10.addEventListener('click', function (event) {
    changePercentageBtn(10)
});
btn10.addEventListener('click', calculate)


btn15.addEventListener('click', function (event) {
    changePercentageBtn(15)
});
btn15.addEventListener('click', calculate)


btn25.addEventListener('click', function (event) {
    changePercentageBtn(25)
});
btn25.addEventListener('click', calculate)


btn50.addEventListener('click', function (event) {
    changePercentageBtn(50)
});
btn50.addEventListener('click', calculate)


function changePercentageBtn (percentage) {
    percentageBtn = percentage
    resetBtnBackground()
    document.getElementById(`btn-${percentage}%`).style.backgroundColor= "hsl(172, 67%, 45%)";
    document.getElementById(`btn-${percentage}%`).style.color= "hsl(183, 100%, 15%)";
}

function resetBtnBackground () {
    document.getElementById('btn-5%').style.backgroundColor= 'hsl(183, 100%, 15%)';
    document.getElementById('btn-5%').style.color= 'white';
    document.getElementById('btn-10%').style.backgroundColor= 'hsl(183, 100%, 15%)';
    document.getElementById('btn-10%').style.color= 'white';
    document.getElementById('btn-15%').style.backgroundColor= 'hsl(183, 100%, 15%)';
    document.getElementById('btn-15%').style.color= 'white';
    document.getElementById('btn-25%').style.backgroundColor= 'hsl(183, 100%, 15%)';
    document.getElementById('btn-25%').style.color= 'white';
    document.getElementById('btn-50%').style.backgroundColor= 'hsl(183, 100%, 15%)';
    document.getElementById('btn-50%').style.color= 'white';
    document.getElementById('custom').value = 'custom'
}




function setToZero () {
    percentageBtn = 0
    document.getElementById('btn-5%').style.backgroundColor= 'hsl(183, 100%, 15%)';
    document.getElementById('btn-5%').style.color= 'white';
    document.getElementById('btn-10%').style.backgroundColor= 'hsl(183, 100%, 15%)';
    document.getElementById('btn-10%').style.color= 'white';
    document.getElementById('btn-15%').style.backgroundColor= 'hsl(183, 100%, 15%)';
    document.getElementById('btn-15%').style.color= 'white';
    document.getElementById('btn-25%').style.backgroundColor= 'hsl(183, 100%, 15%)';
    document.getElementById('btn-25%').style.color= 'white';
    document.getElementById('btn-50%').style.backgroundColor= 'hsl(183, 100%, 15%)';
    document.getElementById('btn-50%').style.color= 'white';
}

custom.addEventListener('change', setToZero);
custom.addEventListener('change', calculate);
numOfPeopleActivate.addEventListener('change', calculate);
billActivate.addEventListener('change', calculate);
billActivate.addEventListener('keyup',function(e){
    if (e.which == 13) this.blur();
});
custom.addEventListener('keyup',function(e){
    if (e.which == 13) this.blur();
});
numOfPeopleActivate.addEventListener('keyup',function(e){
    if (e.which == 13) this.blur();
});


function calculate() {
    document.getElementById('btn-reset').style.backgroundColor ='hsl(172, 67%, 45%)'
    let percentage = parseInt(document.getElementById('custom').value);
    const numeroDePessoas = parseInt(document.getElementById('number-of-people').value);
    const bill = parseFloat(document.getElementById("bill-value").value);
    if (percentageBtn != 0) {
        percentage = percentageBtn
    }
    if (numeroDePessoas == 0) {
        document.getElementById('cant-be-zero').style.display = 'block';
        document.getElementById("number-of-people").style.border = "1px solid red";
    } else { if (isNaN(bill) || isNaN(percentage) || isNaN(numeroDePessoas)) {
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

const btnReset = document.getElementById('btn-reset');
btnReset.addEventListener('click', reset)
function reset() {
    resetBtnBackground()
    document.getElementById('btn-reset').style.backgroundColor ='hsl(183, 94%, 20%)'
    document.getElementById("number-of-people").style.border = "none";
    document.getElementById('cant-be-zero').style.display = 'none';
    document.getElementById('total-value').innerHTML = '$0.00'
    document.getElementById('tip-amount-value').innerHTML = '$0.00'
    document.getElementById('number-of-people').value = ''
    document.getElementById("bill-value").value = ''
    document.getElementById('custom').value = 'custom'
}















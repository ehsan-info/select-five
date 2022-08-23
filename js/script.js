//Calculation Procedures
document.getElementById('btn-calculate').addEventListener('click', function () {
    const getPlayerPrice = getInputValue('player-price');
    const playerExpenses = document.getElementById('player-expenses');
    const playerList = document.getElementsByClassName('item');
    if (typeof getPlayerPrice === 'undefined' || playerList.length === 0) {
        playerExpenses.innerText = 000;
    }
    else {
        const newPlayerExpenses = playerList.length * getPlayerPrice;
        playerExpenses.innerText = newPlayerExpenses;
    }
});

//Total Calculation Procedures
document.getElementById('btn-total').addEventListener('click', function () {
    const getManagerPrice = getInputValue('manager-price');
    const getCoachPrice = getInputValue('coach-price');
    const getPlayerExpenses = getInputTextValue('player-expenses');
    const getTotalPrice = document.getElementById('total-expenses');
    if (getManagerPrice === 'NaN' || getCoachPrice === 'NaN' || getPlayerExpenses === 0) {
        getTotalPrice.innerText = 00;
    }
    else {
        const totalPrice = getPlayerExpenses + getManagerPrice + getCoachPrice;
        getTotalPrice.innerText = totalPrice;
    }
});
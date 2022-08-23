document.getElementById('btn-calculate').addEventListener('click', function () {
    const getPlayerPrice = getInputValue('player-price');
    const playerExpenses = document.getElementById('player-expenses');
    const playerList = document.getElementsByClassName('item');
    if (typeof getPlayerPrice === 'undefined') {
        playerExpenses.innerText = 00;
    }
    else {
        const newPlayerExpenses = playerList.length * getPlayerPrice;
        playerExpenses.innerText = newPlayerExpenses;
    }
});
document.getElementById('btn-total').addEventListener('click', function () {
    const getManagerPrice = getInputValue('manager-price');
    const getCoachPrice = getInputValue('coach-price');
    const getPlayerExpenses = getTextValue('player-expenses');
    const totalPrice = getPlayerExpenses + getManagerPrice + getCoachPrice;
    const getTotalPrice = document.getElementById('total-expenses');
    getTotalPrice.innerText = totalPrice;
});
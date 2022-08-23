function getInputValue(elementId) {
    const getValuePrice = document.getElementById(elementId);
    const getValuePriceString = getValuePrice.value;
    if (/[a-zA-Z]/.test(getValuePriceString)) {
        alert('Please enter only number');
        return;
    }
    else {
        const getPrice = parseInt(getValuePriceString);
        return getPrice;
    }

}
function getTextValue(textId) {
    const getPlayerValue = document.getElementById(textId);
    const getPlayerValueString = getPlayerValue.innerText;
    const newPlayerValue = parseInt(getPlayerValueString);
    return newPlayerValue;
}
function getPlayerName(playerId) {
    const getPlayerName = document.getElementById(playerId);
    const getPlayerNameString = getPlayerName.innerText;
    const playerTotalList = document.getElementById('player-total-list');
    const playerList = document.getElementsByClassName('item');
    if (playerList.length + 1 > 5) {
        alert('No more than 5 players');
        return;
    }
    const li = document.createElement('li');
    li.innerText = getPlayerNameString;
    li.classList.add('item');
    playerTotalList.appendChild(li);
}
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
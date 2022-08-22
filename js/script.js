function getInputValue(elementId) {
    const getValuePrice = document.getElementById(elementId);
    const getValuePriceString = getValuePrice.value;
    const getPrice = parseInt(getValuePriceString);
    return getPrice;
}
function getTextValue(textId) {
    const getPlayerValue = document.getElementById(textId);
    const getPlayerValueString = getPlayerValue.innerText;
    const newPlayerValue = parseInt(getPlayerValueString);
    return newPlayerValue;
}
document.getElementById('btn-calculate').addEventListener('click', function () {
    const getPlayerPrice = getInputValue('player-price');
    const playerExpenses = document.getElementById('player-expenses');
    const newPlayerExpenses = 5 * getPlayerPrice;
    playerExpenses.innerText = newPlayerExpenses;
});
document.getElementById('btn-total').addEventListener('click', function () {
    const getManagerPrice = getInputValue('manager-price');
    const getCoachPrice = getInputValue('coach-price');
    const getPlayerExpenses = getTextValue('player-expenses');
    const totalPrice = getPlayerExpenses + getManagerPrice + getCoachPrice;
    const getTotalPrice = document.getElementById('total-expenses');
    getTotalPrice.innerText = totalPrice;
});
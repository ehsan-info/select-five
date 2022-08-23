//Get Input Value Common Function
function getInputValue(elementId) {
    const getValuePrice = document.getElementById(elementId);
    const getValuePriceString = getValuePrice.value;
    if (/[a-zA-Z]/.test(getValuePriceString)) {
        alert('Please enter only number');
        getValuePrice.value = '';
        return;
    }
    else {
        const getPrice = parseInt(getValuePriceString);
        return getPrice;
    }
}
//Get Input Field Text Value Common Fucntion
function getInputTextValue(textId) {
    const getPlayerValue = document.getElementById(textId);
    const getPlayerValueString = getPlayerValue.innerText;
    const newPlayerValue = parseInt(getPlayerValueString);
    return newPlayerValue;
}
//Get Player Name list Function
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

document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const donateMoney = getInputValueById('input-field');
    
    
     if (isNaN(donateMoney)) {
        alert('Invaild Donation Amount');
        return;
     } else if (donateMoney < 0) {
             alert('Invaild Donation Amount');
        return;
    }

    document.getElementById('add-btn').innerText = donateMoney;
    const mainBalance = document.getElementById("current-balance").textContent; // Get the text content of the span
    const mainBalanceNumber = parseFloat(mainBalance.trim());
    const currentBalance = mainBalanceNumber - donateMoney;// Convert it to a float after trimming spaces
    document.getElementById('current-balance').innerText = currentBalance;

    // history
const place = document.getElementById('place').innerText;
const dateTime = new Date();
     const div = document.createElement('div');
     div.classList.add('history-div')
    div.innerHTML = ` 
    <p>${donateMoney} Taka is ${place}</p>
    <p>${dateTime}</p>
    `;
    
    //call the function
      history('history-container',div);

});


document.getElementById('history-btn').addEventListener('click', function (event) {
    showSection('history','history-btn');
    // showSection('history-btn')
});
document.getElementById('donation').addEventListener('click', function () {
    showSection('card','donation');
    // showSection('donation');

});

      //card-2

      
document.getElementById('donate-btn2').addEventListener('click', function (event) {
    event.preventDefault();
    const donateMoneyCardSecond = getInputValueById('input-field');
    
    
     if (isNaN(donateMoneyCardSecond)) {
        alert('Invaild Donation Amount');
        return;
     } else if (donateMoneyCardSecond < 0) {
             alert('Invaild Donation Amount');
        return;
    }

    document.getElementById('add-btn').innerText = donateMoneyCardSecond;
    const mainBalanceCardSecond = document.getElementById("current-balance").textContent; // Get the text content of the span
    const mainBalanceNumberSecond = parseFloat(mainBalanceCardSecond.trim());
    const currentBalanceCardSecond = mainBalanceNumberSecond - donateMoneyCardSecond;// Convert it to a float after trimming spaces
    document.getElementById('current-balance').innerText = currentBalanceCardSecond;
});


document.getElementById('history-btn').addEventListener('click', function (event) {
    showSection('history','history-btn');
    // showSection('history-btn')
});
document.getElementById('donation').addEventListener('click', function () {
    showSection('card','donation');
    // showSection('donation');
});
// history

const placeSecond = document.getElementById('place2').innerText;
const dateTimeSecond = new Date();
     const divsecond = document.createElement('div');
     divsecond.classList.add('history-div')
    divsecond.innerHTML = ` 
    <p> Taka is ${placeSecond}</p>
    <p>${dateTime}</p>
    `;
    
    //call the function
      history('history-container',divsecond);

      //card-2

document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const donateMoney = getInputValueById('input-field');

    //  if (isNaN(donateMoney)) {
    //     alert('Invaild Donation Amount');
    //     return;
    //  } else if (donateMoney < 0) {
    //          alert('Invaild Donation Amount');
    //     return;
    // }
    document.getElementById('add-btn').innerText = donateMoney
    // const mainBalance = getInputValueById('current-balance');
    // const currentBalance = mainBalance - donateMoney;
    // document.getElementById('current-balance').innerText = currentBalance
    const mainBalance = document.getElementById("current-balance").textContent; // Get the text content of the span
    const mainBalanceNumber = parseFloat(mainBalance.trim());
    const currentBalance = mainBalanceNumber - donateMoney;// Convert it to a float after trimming spaces
    document.getElementById('current-balance').innerText = currentBalance;
});

// document.getElementById('history-btn').addEventListener('click', function (event) {
//     document.getElementById('card').classList.add('hidden')
//     const place = document.getElementById('place').innerText
//     event.preventDefault();
//     const div = document.createElement('div');
//     div.classList.add('border border-1 p-5')
//     div.innerHTML = `
//     <p>${donateMoney} Taka ${place}
//     `;

// })
document.getElementById('history-btn').addEventListener('click', function (event) {
    showSection('history','history-btn');
    // showSection('history-btn')
});
document.getElementById('donation').addEventListener('click', function () {
    showSection('card','donation');
    // showSection('donation');
});
// history
const place = document.getElementById('place').innerText;
const dateTime = new Date();
     const div = document.createElement('div');
    div.innerHTML = ` 
    <p> ${donateMoney} Taka is ${place}</p>
    <p>${dateTime}</p>
    `
    //call the function
      history('history-container',div);
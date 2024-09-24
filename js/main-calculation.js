
document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const donateMoney = getInputValueById('input-field');
    
    
     if (isNaN(donateMoney)) {
        alert('Invaild Donation Amount');
        return;
     } else if (donateMoney < 0 ) {
        alert('Invaild Donation Amount');
        return;
    };
   

  
    const mainBalance = document.getElementById("current-balance").textContent; // Get the text content of the span
    const mainBalanceNumber = parseFloat(mainBalance.trim());
    
// 
  if(donateMoney > mainBalanceNumber){
        alert('You Do Not Have Sufficient Balance');
        return;
    }else{
        document.getElementById('add-btn').innerText = donateMoney;
        const currentBalance = mainBalanceNumber - donateMoney;// Convert it to a float after trimming spaces
        document.getElementById('current-balance').innerText = currentBalance;
    }
    // history
const place = document.getElementById('place').innerText;
const dateTime = new Date();
     const div = document.createElement('div');
     div.classList.add('history-div')
    div.innerHTML = ` 
    <p class="text-xl font-bold">${donateMoney} Taka is ${place}</p>
    <p class="pl-4">${dateTime}</p>
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

      //card-2----------------------card-2---------------------------------------card-2-------

      
document.getElementById('donate-btn2').addEventListener('click', function (event) {
    event.preventDefault();
    const donateMoneyCardSecond = getInputValueById('input-field2');
    console.log(donateMoneyCardSecond);
    
    
     if (isNaN(donateMoneyCardSecond)) {
        alert('Invaild Donation Amount');
        return;
     } else if (donateMoneyCardSecond < 0) {
             alert('Invaild Donation Amount');
        return;
    }

  
    const mainBalanceCardSecond = document.getElementById("current-balance").textContent; // Get the text content of the span
    const mainBalanceNumberSecond = parseFloat(mainBalanceCardSecond.trim());
  
    // validation
    if(donateMoneyCardSecond > mainBalanceNumberSecond){
        alert('You Do Not Have Sufficient Balance');
        return;
    }else{
        document.getElementById('add-btn2').innerText = donateMoneyCardSecond;
        const currentBalanceCardSecond = mainBalanceNumberSecond - donateMoneyCardSecond;// Convert it to a float after trimming spaces
        document.getElementById('current-balance').innerText = currentBalanceCardSecond;
    }
    // history
    const placeSecond = document.getElementById('place2').innerText;
    const dateTimeSecond = new Date();
     const divsecond = document.createElement('div');
     divsecond.classList.add('history-div')
    divsecond.innerHTML = ` 
    <p class="text-xl font-bold">${donateMoneyCardSecond} Taka is ${placeSecond}</p>
    <p class="pl-4">${dateTimeSecond}</p>
    `;
    //call the function
      history('history-container',divsecond);
});


document.getElementById('history-btn').addEventListener('click', function (event) {
    showSection('history','history-btn');
    // showSection('history-btn')
});
document.getElementById('donation').addEventListener('click', function () {
    showSection('card','donation');
    // showSection('donation');
});




      //card-3-----------------card-3-----------------------card-3

      document.getElementById('donate-btn3').addEventListener('click', function (event) {
        event.preventDefault();
        const donateMoneyCardThird = getInputValueById('input-field3');
        console.log(donateMoneyCardThird);
        
        
         if (isNaN(donateMoneyCardThird)) {
            alert('Invaild Donation Amount');
            return;
         } else if (donateMoneyCardThird < 0) {
                 alert('Invaild Donation Amount');
            return;
        }
    
        const mainBalanceCardThird = document.getElementById("current-balance").textContent; // Get the text content of the span
        const mainBalanceNumberThird = parseFloat(mainBalanceCardThird.trim());
   
        // validation
        if(donateMoneyCardThird > mainBalanceNumberThird){
            alert('You Do Not Have Sufficient Balance');
            return;
        }else{
            document.getElementById('add-btn3').innerText = donateMoneyCardThird;
            const currentBalanceCardThird = mainBalanceNumberThird - donateMoneyCardThird;// Convert it to a float after trimming spaces
            document.getElementById('current-balance').innerText = currentBalanceCardThird;
        }
        // history
        const placeThird = document.getElementById('place3').innerText;
        const dateTimeThird = new Date();
         const divThird = document.createElement('div');
         divThird.classList.add('history-div')
        divThird.innerHTML = ` 
        <p class="text-xl font-bold">${donateMoneyCardThird} Taka is ${placeThird}</p>
        <p class="pl-4">${dateTimeThird}</p>
        `;
        //call the function
          history('history-container',divThird);

        //  modal
        const modal = document.getElementById('modal-3');
        modal.showModal();
    });
    const modal = document.getElementById('modal-3');
    document.getElementById('close-btn').addEventListener('click',function(){
        modal.close();
    })
    // modal
    

    document.getElementById('history-btn').addEventListener('click', function (event) {
        showSection('history','history-btn');
        // showSection('history-btn')
    });
    document.getElementById('donation').addEventListener('click', function () {
        showSection('card','donation');
        // showSection('donation');
    });
    
    
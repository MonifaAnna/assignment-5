// shared funtion

function getInputValueById(id) {
     const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber; 
    
}

// history

function showSection(id,Id) {
    //hide
    document.getElementById('card').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    //show
    document.getElementById(id).classList.remove('hidden');
    //btn-bg
    document.getElementById('donation').classList.remove('bg-primary');
    document.getElementById('history-btn').classList.remove('bg-primary');
     document.getElementById(Id).classList.add('bg-primary');
};

function history(id,element) {
    document.getElementById(id).appendChild(element);
}

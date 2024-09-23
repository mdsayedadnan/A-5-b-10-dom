const accounstBlance = document.getElementById('account-balance');
const donationInput1 = document.getElementById('donation-input-1');


console.log(accounstBlance.innerText)

const donate = document.getElementById('donate').addEventListener('click',function(){
    // console.log(donationInput1.value - );
    const totalBalance = parseFloat(accounstBlance.innerText) -  parseFloat(donationInput1.value)
   
    accounstBlance.innerText = totalBalance;
})










const historyButton = document.getElementById('history-button');
const donateButton = document.getElementById('donation-button');

historyButton.addEventListener('click', function () {

    historyButton.classList.add('bg-green-400', 'font-semibold');

    donateButton.classList.remove('bg-green-400')

    document.getElementById('card-container').classList.add('hidden');


    const historyItem = document.createElement('div')
    historyItem = 'bg-blue-500 p-10 rounded-md border-1-3 border-indigo-600';

    historyItem.innerHTML = ` <h4 class = "text-xl font-semibold">${new Date().toLocaleDateString()}<h4/>;

`
    const historyContainer = document.getElementById('history-container');

    document.getElementById('card-container').insertBefore(historyItem, historyContainer);
})




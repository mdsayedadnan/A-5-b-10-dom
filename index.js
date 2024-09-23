const accounstBlance = document.getElementById('account-balance');
const donationInput1 = document.getElementById('donation-input-1');

document.getElementById('Noakhali').addEventListener('click', function () {

    if (donationInput1.value <= 0 || donationInput1.value === 'string') {

        return alert('invalid amount')
    }
    // console.log(accounstBlance.innerText);
    if (parseFloat(donationInput1.value) > parseFloat(accounstBlance.innerText)) {

        return alert('add your balance')
    }
    const totalBalance = parseFloat(accounstBlance.innerText) - parseFloat(donationInput1.value)

    accounstBlance.innerText = totalBalance;

    const addBalance = document.getElementById('add-balance');
    const totalDonate = parseFloat(donationInput1.value) + parseFloat(addBalance.innerText);

    addBalance.innerText = totalDonate;
    my_modal_1.showModal()

})



document.getElementById('Feni').addEventListener('click', function () {
    const donationInput2 = document.getElementById('donation-input-2');
    const totalBalance = parseFloat(accounstBlance.innerText) - parseFloat(donationInput2.value)
     console.log('sklgl', totalBalance);
    accounstBlance.innerText = totalBalance;

    const addBalance2 = document.getElementById('add-balance-2');
    const totalDonate2 = parseFloat(donationInput2.value) + parseFloat(addBalance2.innerText);
    // console.log(totalDonate);

    addBalance2.innerText = totalDonate2;
  

     if (donationInput2.value <= 0 || donationInput2.value === 'string') {

       return alert('invalid amount')
    }
     console.log(accounstBlance.innerText);
    if (parseFloat(donationInput2.value) > parseFloat(accounstBlance.innerText)) {

        return alert('add your balance')
     }
     my_modal_1.showModal()
})



document.getElementById('Quota').addEventListener('click',function () {
    const donationInput3 = document.getElementById('donation-input-3');
    const totalBalance = parseFloat(accounstBlance.innerText) - parseFloat(donationInput3.value)
     console.log('sklgl', totalBalance);
    accounstBlance.innerText = totalBalance;

    const addBalance3 = document.getElementById('add-balance-3');
    const totalDonate3 = parseFloat(donationInput3.value) + parseFloat(addBalance3.innerText);
    // console.log(totalDonate);

    addBalance3.innerText = totalDonate3;
  

     if (donationInput3.value <= 0 || donationInput3.value === 'string') {

       return alert('invalid amount')
    }
    //  console.log(accounstBlance.innerText);
    if (parseFloat(donationInput3.value) > parseFloat(accounstBlance.innerText)) {

        return alert('add your balance')
     }
     my_modal_1.showModal()
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




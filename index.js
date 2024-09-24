const accounstBlance = document.getElementById('account-balance');
const donationInput1 = document.getElementById('donation-input-1');

const historyButton = document.getElementById('history-button');
const donateButton = document.getElementById('donation-button');


document.getElementById('Noakhali').addEventListener('click', function () {
    const hedding = document.getElementById('hedding-1').innerText;
  

    if (donationInput1.value <= 0 || donationInput1.value === 'string') {

        return alert('invalid amount')
    }

    if (parseFloat(donationInput1.value) > parseFloat(accounstBlance.innerText)) {

        return alert('add your balance')
    }
    const totalBalance = parseFloat(accounstBlance.innerText) - parseFloat(donationInput1.value)

    accounstBlance.innerText = totalBalance;

    const addBalance = document.getElementById('add-balance');
    const totalDonate = parseFloat(donationInput1.value) + parseFloat(addBalance.innerText);

    addBalance.innerText = totalDonate;
    my_modal_1.showModal()


    const div = document.createElement('div');
    div.classList.add('bg-blue-100', 'p-10', 'rounded-md', 'border-indigo-600');

    div.innerHTML = `
        <h2 class="font-semibold bg-slate-300 p-3">${donationInput1.value} Taka is Donnate ${hedding} </h2>
        <h4 class="text-xl ml-8 p-3 bg-slate-300 font-semibold"> Date: ${new Date().toLocaleDateString()}</h4>
    `;
    

    document.getElementById('history-section').appendChild(div);
  
})



document.getElementById('Feni').addEventListener('click', function () {
    const donationInput2 = document.getElementById('donation-input-2');

const headding2 =document.getElementById('headding-2').innerText;

    if (donationInput2.value <= 0 || donationInput2.value === 'string') {

        return alert('invalid amount')
    }
    console.log(accounstBlance.innerText);
    if (parseFloat(donationInput2.value) > parseFloat(accounstBlance.innerText)) {

        return alert('add your balance')
    }

    const totalBalance = parseFloat(accounstBlance.innerText) - parseFloat(donationInput2.value)

    accounstBlance.innerText = totalBalance;

    const addBalance2 = document.getElementById('add-balance-2');
    const totalDonate2 = parseFloat(donationInput2.value) + parseFloat(addBalance2.innerText);

    addBalance2.innerText = totalDonate2;

    my_modal_1.showModal()

    const div = document.createElement('div');
    div.classList.add('bg-blue-100', 'p-10', 'rounded-md', 'border-indigo-600');

    div.innerHTML = `
        <h2 class="font-semibold bg-slate-300 p-3">${donationInput1.value} Taka is Donnate ${headding2} </h2>
        <h4 class="text-xl bg-slate-300 font-semibold"> Date: ${new Date().toLocaleDateString()}</h4>
    `;
    

    document.getElementById('history-section').appendChild(div);
  

})

document.getElementById('Quota').addEventListener('click', function () {
    const donationInput3 = document.getElementById('donation-input-3');
    const headding3 = document.getElementById('headding-3').innerText;
    const totalBalance = parseFloat(accounstBlance.innerText) - parseFloat(donationInput3.value)

    if (donationInput3.value <= 0 || donationInput3.value === 'string') {

        return alert('invalid amount')
    }

    if (parseFloat(donationInput3.value) > parseFloat(accounstBlance.innerText)) {

        return alert('add your balance')
    }

    accounstBlance.innerText = totalBalance;

    const addBalance3 = document.getElementById('add-balance-3');
    const totalDonate3 = parseFloat(donationInput3.value) + parseFloat(addBalance3.innerText);

    addBalance3.innerText = totalDonate3;
    my_modal_1.showModal()

    const div = document.createElement('div');
    div.classList.add('bg-blue-100', 'p-10', 'rounded-md', 'border-indigo-600');

    div.innerHTML = `
        <h2 class="font-semibold bg-slate-300 p-3">${donationInput1.value} Taka is Donnate ${headding3} </h2>
        <h4 class="text-xl bg-slate-300 font-semibold"> Date: ${new Date().toLocaleDateString()}</h4>
    `;
    document.getElementById('history-section').appendChild(div);
  

})

document.getElementById('history-button').addEventListener('click', function () {

    historyButton.classList.add('bg-green-400', 'font-semibold');

    donateButton.classList.remove('bg-green-400')

    document.getElementById('history-section').classList.remove('hidden');

    document.getElementById('card-container').classList.add('hidden');



})



document.getElementById('donation-button').addEventListener('click', function () {


    donateButton.classList.add('bg-green-400')
    historyButton.classList.remove('bg-green-400', 'font-semibold');



    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');




})
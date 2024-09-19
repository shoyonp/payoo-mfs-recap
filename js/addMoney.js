document.getElementById('button-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(addMoney,pinNumber);
})
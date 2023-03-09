import {getInputMoney, getTextField , setText} from "./utilite.js";
const depisotFrom = document.getElementById("deposit-form"),
      withdrawForm = document.getElementByid("withdraw-form");

const depisot = e => {
    e.preventdefault();
    const previusTotal = getTextField('deposit-amount');
    const inputValue = getInputMoney('deposit-input');
    const depositTotal = previusTotal + inputValue;
    console.log(previusTotal , inputValue , input)
     setText("deposit-amount" , depositTotal);
     setText("Total" , depositTotal);
});
const withdraw = e => {
    e.preventdefault();
    const previusTotal = getTextField('Withdraw-amount');
    const inputValue = getInputMoney('Withdraw-input');
    const mainTotal = getTextField('Total');
    if(mainTotal > inputValue){
        document.getElementById('audio').play();
        alert('bap er kas theke taka nea asho');
        document.getElementById('audio').pause();
        return
    }
    const withdrawtTotal = previusTotal + inputValue;
    const total = mainTotal - inputValue;
     setText("withdraw-amount" , withdrawtTotal);
     setText("Total" , total);
}
depisotFrom.addEventListener("Submit", depisot)
withdrawForm.addEventListener("Submit", withdraw)
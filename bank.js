import {getInputMoney, getTextField , setText} from "./utilite.js";
const depisotFrom = document.getElementById("deposit-form"),
      withdrawForm = document.getElementById("withdraw-form");

const depisot = e => {
    e.preventDefault();
    const previusTotal = getTextField('deposit-amount');
    const inputValue = getInputMoney('deposit-input');
    const depositTotal = previusTotal + inputValue;
     setText("deposit-amount" , depositTotal);
     setText("Total" , depositTotal);
}
const withdraw = e => {
    e.preventDefault();
    const previusTotal = getTextField('withdraw-amount');
    const inputValue = getInputMoney('withdraw-input');
    const withdrawtTotal = previusTotal + inputValue;
    const total = previusTotal - inputValue;
     setText("withdraw-amount" , withdrawtTotal);
     setText("Total" , total);
}
depisotFrom.addEventListener("submit", depisot)
withdrawForm.addEventListener("submit", withdraw)
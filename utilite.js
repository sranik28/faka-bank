export const getInputMoney = (id) =>{
 const input = document.getElementById(id),
 inputStringValue = input.value;
 input.value = '';
 return parseFloat(inputStringValue);
}

export const getTextField = (id) => {
    const text = document.getElementById(id),
    textString = text.innerText;
    text.innerText ='';
    return parseFloat(textString);
}

export const setText = (id , value) =>{
    document.getElementById(id).innerText = value;
}
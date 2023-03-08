export const getInputMoney = (id) =>{
 const input = document.getElementById(id);
if(input.value === ''){
    document.getElementById('audio').play();
    alert("can not be blanck");
    document.getElementById('audio').pause()
}
else if (isNaN(input.value)){
    document.getElementById('audio').play();
    alert("input a valid number");
    document.getElementById('audio').pause();
}
else if (input.value < 0){
    document.getElementById('audio').play();
    alert("enter a positive number");
    document.getElementById('audio').pause();
}
else{
    const inputStringValue = input.value;
    input.value = '';
    return parseFloat(inputStringValue);
}
input.value = '';
}

export const getTextField = (id) => {
    const text = document.getElementById(id),
    textString = text.innerText;
    return parseFloat(textString);
}

export const setText = (id , value) =>{
    if(!isNaN(value)){
        document.getElementById(id).innerText = value;
    }
}
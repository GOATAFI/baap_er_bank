console.log('deposit showing');
function getInputFieldValueById(inputField){
    const inputField1 = document.getElementById(inputField);
    const inputFieldValueString = inputField1.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField1.value = '';
    return inputFieldValue;
}

function getTextElementValueById (elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId,newValue){
const textElement = document.getElementById(elementId);
textElement.innerText = newValue;
}

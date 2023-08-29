function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('4 digit not found', pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('btn-generate').addEventListener('click', function(){
    const pinField = document.getElementById('pin-field');
    pinField.value = getPin();
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumbersField = document.getElementById('type-numbers');
    const previousTypeNumbers = typeNumbersField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumbersField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNumbers.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumbersField.value = remainingDigits;
        }
    }
    else{
        const newTypeNumbers = previousTypeNumbers + number;
        typeNumbersField.value = newTypeNumbers;
    }
})


document.getElementById('verify-pin').addEventListener('click', function(){
    const pinField = document.getElementById('pin-field');
    const currentPin = pinField.value;

    const typeNumbers = document.getElementById('type-numbers');
    const typedNumbers = typeNumbers.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');

    if(currentPin === typedNumbers){
        pinSuccess.style.display = 'block';
        pinFailure.style.display = 'none';
    }
    else{
        pinFailure.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})

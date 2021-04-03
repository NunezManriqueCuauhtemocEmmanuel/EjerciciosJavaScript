function calculator()
{
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let num3 = parseFloat(document.getElementById('number3').value);
    let operation = document.getElementById('operators').value;
    if(operation === 'Fem'){
        document.getElementById('result').value = ((num2*100)/num1).toFixed(2);
    }
    if(operation === 'Mas'){
        document.getElementById('result').value = ((num3*100)/num1).toFixed(2);
    }
}
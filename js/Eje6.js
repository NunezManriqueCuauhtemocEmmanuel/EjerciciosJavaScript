function calculator()
{
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let operation = document.getElementById('operators').value;
    if(operation === 'Edad'){
        document.getElementById('result').value = (num2-num1).toFixed(0);
    }
}
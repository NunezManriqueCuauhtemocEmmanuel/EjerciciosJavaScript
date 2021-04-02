function calculator()
{
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let operation = document.getElementById('operators').value;
    if(operation === 'ganan')
    {
        document.getElementById('result').value = (num2*(num1*0.2)).toFixed(3);
    }
    if(operation === 'minus')
    {
        document.getElementById('result').value = (num1+num2*(num1*0.2)).toFixed(3);
    }
}
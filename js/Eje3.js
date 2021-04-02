function calculator()
{
    let num1 = parseFloat(document.getElementById('number1').value);
    let operation = document.getElementById('operators').value;
    if(operation === 'Descuento'){
        document.getElementById('result').value = (num1*0.15).toFixed(2);
    }
    if(operation === 'total'){
        document.getElementById('result').value = (num1-(num1*0.15)).toFixed(2);
    }
}
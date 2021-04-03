function calculator()
{
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let num3 = parseFloat(document.getElementById('number3').value);
    let num4 = parseFloat(document.getElementById('number4').value);
    let num5 = parseFloat(document.getElementById('number5').value);
    let operation = document.getElementById('operators').value;
    if(operation === 'Promedio Tres Paricales'){
        document.getElementById('result').value = (10*(0.55*((num1+num2+num3)/30))).toFixed(2);
    }
    if(operation === 'ExamenFinal'){
        document.getElementById('result').value = (num4*0.3).toFixed(2);
    }
    if(operation === 'TrabajoFinal'){
        document.getElementById('result').value = (num5*0.15).toFixed(2);
    }
    if(operation === 'PromedioFinal'){
        document.getElementById('result').value = ((10*(0.55*((num1+num2+num3)/30)))+(num4*0.3)+(num5*0.15)).toFixed(2);
    }
}
function calculator(){
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);
    var mul = num1*num2;
    var resta = num1-num2;
    var suma = num1+num2;
    if(num1>=0 & num2>=0){
        if(num1==num2){
           document.getElementById('el-resultado').innerHTML = mul;
        }
        if(num1>num2){
           document.getElementById('el-resultado').innerHTML = resta;
        }
        if(num1<num2){
           document.getElementById('el-resultado').innerHTML = suma;
        }
    }else{
        alert("ingresa solo numeros reales positivos");
    }
}
function calculator(){
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);
    var num3 = parseInt(document.getElementById('number3').value);
    if(num1>=0 & num2>=0 & num3>=0){
        if(num1>num2 & num1>num3){
           document.getElementById('el-resultado').innerHTML = num1;
        }
        if(num2>num1 & num2>num3){
           document.getElementById('el-resultado').innerHTML = num2;
        }
        if(num3>num1 & num3>num2){
           document.getElementById('el-resultado').innerHTML = num3;
        }
        if(num1==num2==num3){
            document.getElementById('el-resultado').innerHTML = num1;
        }
    }else{
        alert("ingresa solo numeros reales positivos");
    }
}
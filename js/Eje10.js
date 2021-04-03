function calculator(){
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);
    
    if(num1<=0){
        alert("ingresa un numero nuevo ya que el que ingresaste es menor al numero de meses que se permiten legalmente");
    }
    if(num2<140){
        alert("ingresa un numero nuevo ya que el que ingresaste es menor al salario establecido legalmente");
    }
    if(num1>=720){
        alert("ingresa un numero nuevo ya que el que ingresaste es mayor al numero de meses que se permiten legalmente ");
    }else{
        if(num1<12){
            document.getElementById('el-resultado').innerHTML = num2*0.05;
        }
        if(num1>=12 & num1<24){
            document.getElementById('el-resultado').innerHTML = num2*0.07;
        }
        if(num1>=24 & num1<60){
            document.getElementById('el-resultado').innerHTML = num2*0.1;
        }
        if(num1>=60 & num1<120){
            document.getElementById('el-resultado').innerHTML = num2*0.15;
        }
        if(num1>=120){
            document.getElementById('el-resultado').innerHTML = num2*0.2;
        }
    }
}
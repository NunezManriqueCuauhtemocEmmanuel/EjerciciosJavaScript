function calculator(){
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);
    var suma1= num1*num2;
    var suma2= (8*num2)+((num1-8)*(num2*2));
    var suma3= (8*num2)+(8*num2*2)+((num1-16)*(num2*3));
    if(num1<=8 & num1>=0){
        document.getElementById('el-resultado').innerHTML = suma1;
    }
    if(num1>8 & num1<=16){
        document.getElementById('el-resultado').innerHTML = suma2;
    }
    if(num1>16 & num1<=40){
        document.getElementById('el-resultado').innerHTML = suma3;
    }
    if(num1>40){
        alert("ingresa un numero nuevo ya que el que ingresaste supera al limite de horas");
    }
    if(num1<0){
        alert("ingresa un numero nuevo ya que el que ingresaste es menor al limite de horas");
    }
    if(num2<=0){
        alert("ingresa un numero nuevo ya que el que ingresaste es menor al sueldo limite");
    }
}
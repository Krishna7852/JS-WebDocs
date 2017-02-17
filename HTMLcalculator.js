function callFun() {
  var x,y,operation,result;
  x = document.calc.field1.value;
  y = document.calc.field2.value;
  operation = document.calc.field3.value;
  console.log(y);
  x = parseFloat(x);
  y = parseFloat(y);

  result;
  switch(operation){
case 'addition':result = x + y;
break;
case 'subtraction':result = x - y;
break;
case 'multiplication':result = x * y;
break;

case 'division':result = x / y;
break;

default:
result="No operation";
}
document.getElementById('result').value=result;


}

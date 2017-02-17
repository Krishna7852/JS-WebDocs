
function calculator() {


var calculate = {
  first : function (value) {
    this.value1 = value;
    return this;
  },
  second : function (value) {
    this.value2 = value;
    return this;
  },
  sum : function () {
    var add = this.value1 + this.value2;
    alert("sum = "+add);
  }
};
var value1 = prompt("Enter first number");
var value2 = prompt("Enter second number");
calculate.first(Number(value1)).second(Number(value2)).sum();
}

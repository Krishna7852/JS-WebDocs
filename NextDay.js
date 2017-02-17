function currentDay() {
var d=new Date();
   days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var cDay=days[d.getDay()];

document.getElementById("current").innerHTML = "current Day : "+cDay;



Date.prototype.getNextDay = function () {

// var date = d.getDay();
// date++;
d.setDate(d.getDate()+1);
// console.log(date);
// console.log('date :: '+d);
return days[d.getDay()];
}
document.getElementById("next").innerHTML = "Next Day: "+d.getNextDay();

}

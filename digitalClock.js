function DispTime() {
   var today=new Date();
   var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var day=days[today.getDay()];
  var d=today.getDate();
  var month=today.getMonth();
  var year=today.getFullYear();


  var h=today.getHours();
   var m=today.getMinutes();
  var s=today.getSeconds();
   var mer= "AM";
if(h>12){
  h=h-12;
  mer = "PM";
}
if(h===0){
  h=12;
}

    var dtime=document.getElementById('txt');
    dtime.innerHTML=h+":"+m+":"+s+" "+mer+"  "+day+" "+d+"/"+(month+1)+"/"+year;
    if(true)
        {
      disp(s);
    }
        setTimeout(function() {DispTime()},1000);




function disp(i) {
  var articles = [{
     "Author":"mahesh", "Date_published":"15-jan-2014","publication":"technical"
   },{ "Author":"krishna", "Date_published":"21-april-2015","publication":"Digital-logic"
 },{ "Author":"vivek","Date_published":"7-jun-2010","publication": "tech-max"
  }];


    var dispout=document.getElementById('json');
  dispout.innerHTML= articles[i].Author+" : "+articles[i].Date_published+" : "+articles[i].publication;


}
}

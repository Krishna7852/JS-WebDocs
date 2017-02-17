function Inrow()
  {
    var table=document.getElementById("txt");
    var x=document.getElementById("txt").rows.length;
    var column=document.getElementById("txt").rows[0].cells.length;
    var row1=table.insertRow(x);
    for (var i = 0; i < column; i++) {
      var coll1=row1.insertCell(i);
      coll1.innerHTML="new col"+i;
      }
    }
    function Incol()
    {
      var len=document.getElementById("txt");
      var col=document.getElementById("txt").rows[0].cells.length;
      for (var i = 0; i < len.rows.length; i++) {
       var coll2=len.rows[i].insertCell(col);
coll2.innerHTML="new Col"+i;
        }
}

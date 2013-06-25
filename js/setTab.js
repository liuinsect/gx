function setTab(m,n){
 var tli=document.getElementById("menu"+m).getElementsByTagName("li");
 var mdiv=document.getElementById("main"+m).getElementsByTagName("ul");
 for(i=0;i<tli.length;i++){
  tli[i].className=i==n?"one":"";
  mdiv[i].style.display=i==n?"block":"none";
 }
}
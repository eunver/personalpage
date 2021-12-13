/* 
<li id="dropmenu" class="home home-trigger"><a  onclick="window.location='index.html'" > <i class="fas fa-home"></i></a></li>
document.querySelector("#dropmenu").addEventListener("click",
function() {
document.querySelectorAll("li").forEach(function(elem) {
          elem.classList.toggle("visible");
        });
    });
   */ 
function confirmMessage() {
  alert("I got your message!")
}




function BlackScholes(PutCallFlag, S, X, T, r, v) {
  var PutCallFlag= document.getElementById("flag").value; 
  
  var S= parseFloat(document.getElementById("stock").value); 
  var X= parseFloat(document.getElementById("strike").value); 
  var T= parseFloat(document.getElementById("maturity").value); 
  var r= parseFloat(document.getElementById("interest").value); 
  var v= parseFloat(document.getElementById("vol").value); 

  var d1, d2;
  d1 = (Math.log(S / X) + (r + v * v / 2.0) * T) / (v * Math.sqrt(T));
  d2 = d1 - v * Math.sqrt(T);
  
  
  if (PutCallFlag == "C") {
  return alert(S * CND(d1)-X * Math.exp(-r * T) * CND(d2)) }
  else {
  return alert(X * Math.exp(-r * T) * CND(-d2) - S * CND(-d1))}
  
  }
  
  /* The cummulative Normal distribution function: */
  
  function CND(x){
  
  var a1, a2, a3, a4 ,a5, k ;
  
  a1 = 0.31938153, a2 =-0.356563782, a3 = 1.781477937, a4= -1.821255978 , a5= 1.330274429;
  
  if(x<0.0)
  return 1-CND(-x);
  else
  k = 1.0 / (1.0 + 0.2316419 * x);
  return 1.0 - Math.exp(-x * x / 2.0)/ Math.sqrt(2*Math.PI) * k
  * (a1 + k * (-0.356563782 + k * (1.781477937 + k * (-1.821255978 + k * 1.330274429)))) ;


  
  }
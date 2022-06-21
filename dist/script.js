var x , y , z ;
function display(val){
document.getElementById('a').value += val  ;
x =  document.getElementById('a').value 
}
   function squar(){
    var r = document.getElementById('a').value;
   document.getElementById('a').value *=r;  
   x =   document.getElementById('a').value;
}
function fun(){
    if(x==null){
        document.getElementById('a'). value = null;
    }
    else{

    y = eval(x);
    document.getElementById('a').value = Math.sqrt(y) ;
    x =    document.getElementById('a').value;
    } 
}

function operetor(value){
 document.getElementById('a').value += value;
}
function result(){
    document.getElementById('a').value = eval(x);
    x =  document.getElementById('a').value
}

function clearresult(){
    x = null;
 document.getElementById('a').value = x;
// x =  document.getElementById('a').value;
}
var array = [];
var p;
 function back(){
      p = x.split('');
      array = p;
     var f = p.length;
var u = array[f-1];
var n = x.replace(u , '');
document.getElementById('a').value = n ;
x = document.getElementById('a').value ;
 }
function abs(){
if( x<0)
 document.getElementById('a').value = -x;
 x =  document.getElementById('a').value
}
function pi(val){
     p = x.split('');
    array = p;
   var f = p.length;
var u = array[f-1];
if(u=='+' || u=='-' || u=='*' || u=='/' ){
    document.getElementById('a').value += val;
    x = document.getElementById('a').value;
}
else{
    document.getElementById('a').value +=('*'+val) ;
    x =   document.getElementById('a').value;
   }
}
function ratios(){
    document.getElementById('tr1').innerHTML += '<td id="id1"><button onclick="getcos()" class="ratios" style="width:100px;">cos(x)</button></td>';
    document.getElementById('tr2').innerHTML += '<td id="id2"><button onclick="getsin()" class="ratios" style="width:100px;">sin(x)</button></td>';
    document.getElementById('tr3').innerHTML += '<td id="id3"><button onclick="gettan()" class="ratios"style="width:100px;">tan(x)</button></td>';
    document.getElementById('tr4').innerHTML += '<td id="id4"><button onclick="factory()" class="ratios" style="width:100px;">!</button></td>'
    add();
    var del1 = document.getElementById('id')//delet ratios
    del1.parentNode.removeChild(del1);
   
}
function add(){
    document.getElementById('l').innerHTML = '<img src="images/ratios1.png" onclick="delet()" id="delet" style="width: 65px; height: 65px; border-radius: 50%; background-color="blue";">';
}  


function delet(){
var del = document.getElementById('id1');
del.parentNode.removeChild(del);
var del2 =document.getElementById('id2');
del2.parentNode.removeChild(del2);
var del3 =document.getElementById('id3');
del3.parentNode.removeChild(del3);
var del4 =document.getElementById('id4');
del4.parentNode.removeChild(del4);
var delet = document.getElementById('delet');
delet.parentNode.removeChild(delet);
document.getElementById('l').innerHTML = '<img src="images/ratios.png" onclick="ratios()" style="width: 65px; height: 65px; border-radius: 50%;">';
}
function getcos(){
  //x = document.getElementById('a').value ;
  z = eval(x);
   var cos = Math.cos(z);
   document.getElementById('a').value = cos;
   x = document.getElementById('a').value ;
  document.getElementById('a').value =  parseFloat(x).toFixed(3);
 x =  document.getElementById('a').value;

}
function getsin(){
    z = eval(x);
    var sin = Math.sin(z);
    document.getElementById('a').value = sin;
    x = document.getElementById('a').value ;
   document.getElementById('a').value =  parseFloat(x).toFixed(3);
  x =  document.getElementById('a').value;
}
function gettan(){
    z = eval(x);
    var tan = Math.tan(z);
    document.getElementById('a').value = tan;
    x = document.getElementById('a').value ;
   document.getElementById('a').value =  parseFloat(x).toFixed(3);
  x =  document.getElementById('a').value;
}
function factory(){
    var i;
    var fact = 1;
    var e = eval(x);
    for(i=1 ; i <= e ; i++){
        fact = fact*i;
    }
    document.getElementById('a').value = fact;
    x =  document.getElementById('a').value;
}

























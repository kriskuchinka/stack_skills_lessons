/*document.onclick=function(){
    alert("You clicked this page");
};*/
function eventhandler() {

var image= document.getElementById("mainImage");
image.onclick= function(){
    alert("you clicked header image");
}
}
window.onload=function(){
   eventhandler(); 
    
};
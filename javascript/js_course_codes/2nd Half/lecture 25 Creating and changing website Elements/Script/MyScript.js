/*var content=document.getElementById("content");
content.setAttribute("align","right");
var tom=document.getElementById("action");
console.log(tom.innerHTML);
var side=document.getElementById("side");
console.log(side.innerHTML);*/
var newh1 = document.createElement("h1");
var newp = document.createElement("p");

// to add content, either use innerHTML
newh1.innerHTML = "Top and best";
newp.innerHTML = "the top movies and best movies here";



// and we still need to attach them to the document!
document.getElementById("NewElement").appendChild(newh1);
document.getElementById("NewElement").appendChild(newp);


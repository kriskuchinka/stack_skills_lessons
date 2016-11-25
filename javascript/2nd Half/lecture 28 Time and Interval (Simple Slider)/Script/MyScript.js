/*function message() {
    alert("Alert is on");
}
setTimeout(message,3000);*/
var image = document.getElementById("mainImage");
var imageArray = ["images/bournelegacy.jpg","images/inception.jpg",
              "images/star0.jpg","images/hunger0.jpg",
              "images/V forever.jpg",
              "images/about.jpeg"];
var imageindex = 0;
function changeheader() {
image.setAttribute("src",imageArray[imageindex]);
imageindex++;
if (imageindex >= imageArray.length) {
    imageindex = 0;
}
}
var intervalhandler = setInterval(changeheader,2000);
image.onclick = function(){
    clearInterval(intervalhandler);
}

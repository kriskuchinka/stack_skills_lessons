function show() {
document.getElementById("luxery").onclick =
function(){
if(document.getElementById("luxery").checked)
        {
	document.getElementById("package").style.display= "block";
	} else{
		document.getElementById("package").style.display = "none";
		}		
};
document.getElementById("package").style.display = "none";
}
window.onload = function(){
	show();
};

<!--
//  random counter - from tryme.ro
var hit = ( Math.ceil( Math.random() * 10000 ).toString() ).bold().fontcolor( 'red' );
document.write( " Man " + hit + " On" );
   var hit = ( Math.ceil( Math.random() * 10000 ).toString() ).bold().fontcolor( 'red' );
 document.write( " |  woman " + hit + " On" );

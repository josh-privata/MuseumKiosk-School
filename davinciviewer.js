var interval = null;
var speed = 30;
var count = 0;
var headArray = ["Corkscrew thing", "Lantern", "Bicycle", "Row Boat", "Tank", "Board with Poles", "Sewing Machine", "Original iPad", "Portable Clothesline"];
var textArray = ["This is the famous davinci corckscrew thing",
                "This is the famous davinci lantern",
                "This is the famous davinci bicycle, used to win the first tour de italy",
                "This is the famous davinci row boat",
                "This is the famous davinci tank",
                "This is the famous davinci board with poles",
                "This is the famous davinci sewing machine",
                "This is the famous davinci iPad",
                "This is the famous davinci portable clothsline, with modular wall attachment for privacy"];

function distext(i) {
    document.getElementById("exdesc").innerHTML = textArray[i];
    document.getElementById("exhead").innerHTML = headArray[i];
}

function run() {
	count += speed;
	
	if ( count >=675 ){
		window.clearInterval( interval );
		interval = null;
	}
	
	var bigImage = document.getElementById( "imgCover" );
	bigImage.setAttribute ( "style", "width: " + (0.7656 * count + "50px;"), "height: " + (count + "50px;") ); 
}

function display ( imgfile ) {
	if ( interval )
		return;
		
	var bigImage = document.getElementById ( "imgCover" );
	bigImage.setAttribute ( "style", "width: 0px; height: 0px;" );
	bigImage.setAttribute ( "src", "assets/exhibits/" + imgfile );
	bigImage.setAttribute ( "alt", "Full Size version of " + imgfile );
	count = 0;
	interval = window.setInterval ( "run()", 10 );
}

function start() {
document.getElementById("v1").addEventListener("click", function () { display("V1.jpg"); }, false);
document.getElementById("v1").addEventListener("click", function () { distext(0); }, false);
document.getElementById("v2").addEventListener("click", function () { display("V2.jpg"); }, false);
document.getElementById("v2").addEventListener("click", function () { distext(1); }, false);
document.getElementById("v3").addEventListener("click", function () { display("V3.jpg"); }, false);
document.getElementById("v3").addEventListener("click", function () { distext(2); }, false);
document.getElementById( "v4" ).addEventListener ( "click", function() { display( "V4.jpg" ) ; }, false );
document.getElementById("v4").addEventListener("click", function () { distext(3); }, false);
document.getElementById( "v5" ).addEventListener ( "click", function() { display( "V5.jpg" ) ; }, false );
document.getElementById("v5").addEventListener("click", function () { distext(4); }, false);
document.getElementById( "v6" ).addEventListener ( "click", function() { display( "V6.jpg" ) ; }, false );
document.getElementById("v6").addEventListener("click", function () { distext(5); }, false);
document.getElementById( "v7" ).addEventListener ( "click", function() { display( "V7.jpg" ) ; }, false );
document.getElementById("v7").addEventListener("click", function () { distext(6); }, false);
document.getElementById( "v8" ).addEventListener ( "click", function() { display( "V8.jpg" ) ; }, false );
document.getElementById("v8").addEventListener("click", function () { distext(7); }, false);
document.getElementById( "v9" ).addEventListener ( "click", function() { display( "V9.jpg" ) ; }, false );
document.getElementById("v9").addEventListener("click", function () { distext(8); }, false);
}

window.addEventListener ( "load", start, false );

var interval = null;
var speed = 30;
var count = 0;
var headArray = ["Big Wheel", "Hovercraft", "Plane", "MonoCycle", "Coffin-O-Cycle", "Rocket Train", "Baked Desert", "Snow Sled", "Chipmunk Helicopter", "Alpha-624X[CLASSIFIED]"];
var textArray = ["This is the famous big wheel device",
                "This is the earliest hovercraft",
                "This is the famous Spruce Moose, not at all related to the Goose like plane it resembles in name, apperance or actuality",
                "This is the famous Morrison Monocyclopod",
                "This is the famous Coffin-O-Cycle",
                "This is the incredibley dangerous, but hilarious, Rocket Train",
                "This is a piece of apple pie",
                "This is the one of the early designs of snow sled",
                "Chipmunks are known for their ability to cunstruct very stable helicopters",
                "Sledsickle, also know as Alpha-624X. This project is top secret."];

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
    document.getElementById("t1").addEventListener("click", function () { display("T1.jpg"); }, false);
    document.getElementById("t1").addEventListener("click", function () { distext(0); }, false);
    document.getElementById("t2").addEventListener("click", function () { display("T2.jpg"); }, false);
    document.getElementById("t2").addEventListener("click", function () { distext(1); }, false);
    document.getElementById("t3").addEventListener("click", function () { display("T3.jpg"); }, false);
    document.getElementById("t3").addEventListener("click", function () { distext(2); }, false);
    document.getElementById("t4").addEventListener("click", function () { display("T4.jpg"); }, false);
    document.getElementById("t4").addEventListener("click", function () { distext(3); }, false);
    document.getElementById("t5").addEventListener("click", function () { display("T5.jpg"); }, false);
    document.getElementById("t5").addEventListener("click", function () { distext(4); }, false);
    document.getElementById("t6").addEventListener("click", function () { display("T6.jpg"); }, false);
    document.getElementById("t6").addEventListener("click", function () { distext(5); }, false);
    document.getElementById("t7").addEventListener("click", function () { display("T7.jpg"); }, false);
    document.getElementById("t7").addEventListener("click", function () { distext(6); }, false);
    document.getElementById("t8").addEventListener("click", function () { display("T8.jpg"); }, false);
    document.getElementById("t8").addEventListener("click", function () { distext(7); }, false);
    document.getElementById("t9").addEventListener("click", function () { display("T9.jpg"); }, false);
    document.getElementById("t9").addEventListener("click", function () { distext(8); }, false);
    document.getElementById("t10").addEventListener("click", function () { display("T10.jpg"); }, false);
    document.getElementById("t10").addEventListener("click", function () { distext(9); }, false);
}

window.addEventListener ( "load", start, false );



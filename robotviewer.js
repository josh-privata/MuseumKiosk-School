var interval = null;
var speed = 30;
var count = 0;
var headArray = ["The Gibson", "Spiderbot", "Hoppy", "Fido", "Johnny 5", "Snakebot", "Lego Robot", "Hexabot", ];
var textArray = ["This is the famous Gibson supercomputer",
                "A scary Robot Spider",
                "This is the Hoppy, the robot hopper",
                "This is Fido",
                "This is the Johnny 5",
                "This is the 'a robot snake'",
                "This is a technics lego robot",
                "This is a hexabot",      ];

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
    document.getElementById("r1").addEventListener("click", function () { display("R1.jpg"); }, false);
    document.getElementById("r1").addEventListener("click", function () { distext(0); }, false);
    document.getElementById("r2").addEventListener("click", function () { display("R2.jpg"); }, false);
    document.getElementById("r2").addEventListener("click", function () { distext(1); }, false);
    document.getElementById("r3").addEventListener("click", function () { display("R3.jpg"); }, false);
    document.getElementById("r3").addEventListener("click", function () { distext(2); }, false);
    document.getElementById("r4").addEventListener("click", function () { display("R4.jpg"); }, false);
    document.getElementById("r4").addEventListener("click", function () { distext(3); }, false);
    document.getElementById("r5").addEventListener("click", function () { display("R5.jpg"); }, false);
    document.getElementById("r5").addEventListener("click", function () { distext(4); }, false);
    document.getElementById("r6").addEventListener("click", function () { display("R6.jpg"); }, false);
    document.getElementById("r6").addEventListener("click", function () { distext(5); }, false);
    document.getElementById("r7").addEventListener("click", function () { display("R7.jpg"); }, false);
    document.getElementById("r7").addEventListener("click", function () { distext(6); }, false);
    document.getElementById("r8").addEventListener("click", function () { display("R8.jpg"); }, false);
    document.getElementById("r8").addEventListener("click", function () { distext(7); }, false);
}

window.addEventListener ( "load", start, false );



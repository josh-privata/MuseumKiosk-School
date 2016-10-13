var TextArray = ["This is the silly robot", "This is the weird Robot", "This is the erotic robot" ];

function display(i) {
       document.getElementById("exdesc").innerHTML = TextArray[i];
   }

function start() {
    document.getElementById("v1").addEventListener("click", function() { display(0); }, false);
    document.getElementById("v2").addEventListener("click", function () { display(1); }, false);
    document.getElementById("v3").addEventListener("click", function () { display(2); }, false);
    document.getElementById("v4").addEventListener("click", function () { display("V4.jpg"); }, false);
    document.getElementById("v5").addEventListener("click", function () { display("V5.jpg"); }, false);
    document.getElementById("v6").addEventListener("click", function () { display("V6.jpg"); }, false);
    document.getElementById("v7").addEventListener("click", function () { display("V7.jpg"); }, false);
    document.getElementById("v8").addEventListener("click", function () { display("V8.jpg"); }, false);
    document.getElementById("v9").addEventListener("click", function () { display("V9.jpg"); }, false);
}

window.addEventListener("load", start, false);

function getDate() {
    var d = new Date();
    document.getElementById("mydate").innerHTML = d;
}

function change() {
    getDate();
    document.getElementById("abt1").style.fontSize = "15px";
    document.getElementById("abt1").style.color = "red";
}

function chnge() {
    getDate();
    document.getElementById("abt3").style.fontSize = "15px";
    document.getElementById("abt3").style.color = "red";
}

function sizecolor() {
    getDate();
    document.getElementById("abt2").style.fontSize = "15px";
    document.getElementById("abt2").style.color = "red";
}

function changesize() {
    getDate();
    document.getElementById("abt4").style.fontSize = "15px";
    document.getElementById("abt4").style.color = "red";
}

globalThis

function replaceName(){
    let name = prompt("Siapa nama anda?","pengunjung");
    document.getElementById("visitor-name").innerHTML=name;
}

replaceName();
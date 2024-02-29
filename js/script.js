globalThis

function outputUserForm(name, dob, gender, message){
    document.getElementById("out-name").innerHTML=name;
    document.getElementById("out-dob").innerHTML=dob;
    document.getElementById("out-gender").innerHTML=gender;
    document.getElementById("out-message").innerHTML=message;
}

function genderInputCheck(maleChecked,femaleChecked){
    // check if none or both radio buttons are entered
    if ((maleChecked&&femaleChecked)||(!maleChecked&&!femaleChecked)){
        return false;
    }
    
    return true;

}
function replaceName(){
    let name = prompt("Siapa nama anda?","pengunjung");
    document.getElementById("visitor-name").innerHTML=name;
}

function validateForm(){
    //check if any field is empty
    //outputs the user's input
    var name = document.forms["user-form"]["name"].value;
    var dob = document.forms["user-form"]["dob"].value;
    var message = document.forms["user-form"]["message"].value; 
    var maleChecked = document.getElementById("male").checked;
    var femaleChecked = document.getElementById("female").checked;
    var gender = "";

    if (genderInputCheck(maleChecked,femaleChecked)){
        if (maleChecked){
            gender = "Laki-Laki";
        }else if (femaleChecked){
            gender = "Perempuan";
        }
    }
    else{
        //warning to choose one
        alert("Pilih salah satu Jenis Kelamin.");
        return false;
    }

    if ((name=="")||(dob=="")||(gender=="")||(message=="")){
        // sned error message, return false
        alert("Form tidak komplit. Harap isi dengan benar.");
        return false;     
    }
    else{
        // output all the info, return true
        outputUserForm(name, dob, gender, message);

        return true;
    }

}

//banner autoslide functions

let slideIndex=1;
showSlide(slideIndex);

function nextSlide(n){
    showSlide(slideIndex +=n);
}

function showSlide(n){
    var i;
    var x = document.getElementsByClassName("img-slideshow");
    if (n>x.length) {slideIndex = 1}
    if (n<1) {slideIndex = x.length}

    for (i=0; i<x.length; i++){
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display="block";

}

replaceName();

const slideInterval = setInterval(()=> nextSlide(1),1000);git 

document.getElementById("send-submit").addEventListener("click",()=>validateForm())
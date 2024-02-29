globalThis

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
    }

    if ((name=="")||(dob=="")||(message=="")||(gender=="")){
        // sned error message, return false
        console.log("empty field(s)")      
    }
    else{
        // putput all the info, return true
    }

}

replaceName();

document.getElementById("send-submit").addEventListener("click",()=>validateForm())
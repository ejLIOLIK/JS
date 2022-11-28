var id, pw, repw;
var input_name, email;
var input_sex;

var birthdate_y, birthdate_m, birthdate_d;
var phonenum1, phonenum2, phonenum3;

window.onload = function(){
    id = document.getElementById("ID");
    pw = document.getElementById("PW");
    repw = document.getElementById("rePW");
    input_name = document.getElementById("NAME");
    email = document.getElementById("EMAIL");
    input_sex = document.getElementsByName("sex");

    birthdate_y = document.getElementById("birth_y");
    birthdate_m = document.getElementById("birth_m");
    birthdate_d = document.getElementById("birth_d");

    phonenum1 = document.getElementById("phone1");
    phonenum2 = document.getElementById("phone2");
    phonenum3 = document.getElementById("phone3");
}

function LegMth(){

    var str ="";

    if(checkTxt()){

        str = str + "ID : " + id.value + "\nPASSWORD : " + pw.value + "\n이름 : " + input_name.value + "\ne-mail : " + email.value;

        if(checkSex()=="G")
        {str = str+"\n성별 : " + "여성";}
        else if(checkSex()=="M")
        {str = str+"\n성별 : " + "남성";}

        str = str+"\n생년월일 : " + strDate() + "\n핸드폰 : " + strPhone();

        alert(str);
    }

}

function strDate(){
    var str="";
    str = str + birthdate_y.value + birthdate_m.value + birthdate_d.value;
    return str;
}

function strPhone(){
    var str="";
    str = str + phonenum1.value + "-" + phonenum2.value + "-" + phonenum3.value;
    return str;
}

function checkSex(){ // G or M
    var strSex="";

    for(var i=0;i<input_sex.length;i++){
        if(input_sex[i].checked == true){
            strSex = input_sex[i].value;
        }
    }
    return strSex;
}

function checkTxt(){
    if(id.value.length<6 || id.value.length>12){
        alert("ID는 6글자이상 12글자 이하로만 입력하세요");
        console.log("ID 글자수 Fail");
        return false;
    }
    console.log("ID 글자수 Success");

    if(pw.value.length<6 || pw.value.length>12){
        alert("PASSWORD는 6글자이상 12글자 이하로만 입력하세요");
        console.log("PASSWORD 글자수 Fail");
        return false;
    }
    console.log("PASSWORD 글자수 Success");

    if(repw.value.length<6 || repw.value.length>12){
        alert("PASSWORD는 6글자이상 12글자 이하로만 입력하세요");
        console.log("PASSWORD 재입력 글자수 Fail");
        return false;
    }
    console.log("PASSWORD 재입력 글자수 Success");


    if(pw.value!=repw.value){
        alert("PASSWORD 재입력 불일치");
        console.log("PASSWORD 재입력 불일치");
        return false;
    }
    console.log("PASSWORD 재입력 일치");


    if(input_name.value.length<2 || input_name.value.length>4){
        alert("이름은 2글자이상 4글자 이하로만 입력하세요");
        console.log("이름 글자수 Fail");
        return false;
    }
    console.log("이름 글자수 Success");

    if(email.value.length<6 || email.value.length>15){
        alert("이메일 주소는 6글자이상 15자 이하로만 입력하세요");
        console.log("이메일 글자수 Fail");
        return false;
    }
    console.log("이메일 글자수 Success");

    
    return true;
}
var idScr;
var passwordScr;
var loginboxScr;

var idStr ="";
var passwordStr ="";

var bookList = [
    new formList("hello","hi"),
    new formList("sell","buy"),
    new formList("green","red"),
];

function formList(idData, pwData){
    this.idData = idData;
    this.pwData = pwData;
}

function loginCheck(i,p){

    if(idStr==i && passwordStr==p){
        return true;
    }

    return false;
}

window.onload = function(){

    idScr = document.getElementById("ID");
    passwordScr = document.getElementById("PASSWORD");
    loginboxScr = document.getElementById("LOGINBOX");

    // idStr = idScr.value;
    // passwordStr = passwordScr.value;
}

function LoginMth(){

    idStr = idScr.value;
    passwordStr = passwordScr.value;

    for(var i=0;i<bookList.length;i++){
        if(loginCheck(bookList[i].idData, bookList[i].pwData)){
            //alert("로그인 성공");
            loginboxScr.innerHTML = idStr + "회원님 반갑습니다.";
            break;
        }
        
        if(i==bookList.length-1){
            alert("로그인 실패");
        }
    }

}
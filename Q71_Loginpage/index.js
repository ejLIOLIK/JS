var idScr;
var passwordScr;
var loginboxScr;
var timeScr;

var idStr ="";
var passwordStr ="";
var tStr = " ";

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
    timeScr = document.getElementById("TIME");

    setInterval(printTime, 1);
}

function LoginMth(){

    idStr = idScr.value;
    passwordStr = passwordScr.value;

    for(var i=0;i<bookList.length;i++){
        if(loginCheck(bookList[i].idData, bookList[i].pwData)){
            loginboxScr.innerHTML = idStr + "회원님 반갑습니다.";
            break;
        }
        
        if(i==bookList.length-1){
            alert("로그인 실패");
        }
    }
}

function printTime(){

    tStr = " ";
    timeScr.innerHTML = "";

    var now = new Date();

    strSum(now.getFullYear() + "년 ");
    strSum((now.getMonth()+1)+ "월 ");

    if (now.getDate() < 10) {
        strSum("0" + now.getDate() + "일 ");
    }
    else {
        strSum(now.getDate() + "일 ");
    }

    if (now.getHours() < 10) {
        strSum("0" + now.getHours() + "시 ");
    }
    else {
        strSum(now.getHours() + "시 ");
    }
    
    if(now.getMinutes()<10){
    strSum("0"+ now.getMinutes() + "분 ");}
    else{
    strSum(now.getMinutes() + "분 ");}
    
    if(now.getSeconds()<10){
    strSum("0"+now.getSeconds() + "초 ");}
    else{
    strSum(now.getSeconds() + "초 ");}
    
    if (now.getMilliseconds() == 0) {
        strSum("0" + "0" + "0" + now.getMilliseconds() + "밀리초 ");
    }
    else if (now.getMilliseconds() < 10) {
        strSum("0" + "0" + now.getMilliseconds() + "밀리초 ");
    }
    else if (now.getMilliseconds() < 100) {
        strSum("0" + now.getMilliseconds() + "밀리초 ");
    }
    else {
        strSum(now.getMilliseconds() + "밀리초 ");
    }

    timeScr.innerHTML = tStr;
}

function strSum(s){
    tStr = tStr +s;
}
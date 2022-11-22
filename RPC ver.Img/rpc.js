
var ai_num, ai = "", user = ""; // 각각의 가위바위보
var rpcInputText;
var rpcResultScreen;
var resultString = "";


window.onload = function () {

    rpcInputText = document.getElementById("rpc_input_text");       // 연결
    rpcResultScreen = document.getElementById("rpc_result_screen");       // 연결
    divRpcImgUser = document.getElementById("rpc_user");       // 연결
    divRpcImgCom = document.getElementById("rpc_com");       // 연결

}

function rpcInputButtonClick() {

    ai_num = Math.floor(Math.random() * 3); // 0 = 가위, 1 = 바위, 2 = 보

    user = rpcInputText.value;

    //document.write(ai_num); br();

    if (user == "가위" || user == "바위" || user == "보") {

        switch (ai_num) {
            case 0: ai = "가위"; break;
            case 1: ai = "바위"; break;
            case 2: ai = "보"; break;
            default: alert("ERROR : ai-num");
        }
    } else {
        alert("ERROR : user");
    }


    resultString = "유저:" + user; // * 주의 * 다시 게임을 할 경우 이 명령줄로 인해 기존 누적된 내용이 초기화가 됨.
    resultString = resultString + "\n";
    resultString = resultString + "컴:" + ai;
    resultString += "\n";


    //이미지
    switch (user) {
        case "가위":
            divRpcImgUser.innerHTML = "<img src='sc.png'>"
            break;
        case "바위":
            divRpcImgUser.innerHTML = "<img src='ro.png'>"
            break;
        case "보":
            divRpcImgUser.innerHTML = "<img src='pa.png'>"
            break;
        default: alert("ERROR : user img");
    }
    switch (ai) {
        case "가위":
            divRpcImgCom.innerHTML = "<img src='c_sc.png'>"
            break;
        case "바위":
            divRpcImgCom.innerHTML = "<img src='c_ro.png'>"
            break;
        case "보":
            divRpcImgCom.innerHTML = "<img src='c_pa.png'>"
            break;
        default: alert("ERROR : ai img");
    }

    //승패
    if (user == ai) { //무승부
        W_D_L(0);
    }
    else if (user == "가위") {
        if (ai == "바위") { W_D_L(2); }
        else if (ai == "보") { W_D_L(1); }
    }
    else if (user == "바위") {
        if (ai == "가위") { W_D_L(1); }
        else if (ai == "보") { W_D_L(2); }
    }
    else if (user == "보") {
        if (ai == "가위") { W_D_L(2); }
        else if (ai == "바위") { W_D_L(1); }
    }

}


function W_D_L(result) { //결과값 출력 함수 //0무승부 1유저승 2유저패

    var w_d_l;

    switch (result) {
        case 0: w_d_l = ("DRAW"); DRAW++; break;
        case 1: w_d_l = ("USER WIN"); WIN++; break;
        case 2: w_d_l = ("USER LOSE"); LOSE++; break;
        default:
            alert("ERROR : wdl");
    }

    resultString = resultString + "결과: " + w_d_l;

    rpcResultScreen.value = resultString;

}


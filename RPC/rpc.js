
var ai_num, ai, user; // 각각의 가위바위보
    
var WIN=0, DRAW=0, LOSE=0; // 전적
document.write("전적"); br(); br();



while (true) {

    ai_num = Math.floor(Math.random() * 3); // 0 = 가위, 1 = 바위, 2 = 보

    //document.write(ai_num); br();

    switch (ai_num) {
        case 0: ai = "가위"; break;
        case 1: ai = "바위"; break;
        case 2: ai = "보"; break;
        default: document.write("ERROR");
    }

    //document.write(ai); br();

    user = prompt("가위, 바위, 보");

    // 가위 바위 - 가위 보 - 바위 보 - 바위 가위 - 보 가위 - 보 바위 //
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
    else { break; }
}

br();
document.write(" 승: "+ WIN); br();
document.write(" 패: "+ LOSE); br();
document.write(" 무: "+ DRAW); br();


function W_D_L(result){ //결과값 출력 함수 //0무승부 1유저승 2유저패

    var TEXT;
    var w_d_l;

    //document.write("[USER] " + user);

    switch(result){
        case 0 : w_d_l = ("   >DRAW<   "); DRAW++; break;
        case 1 : w_d_l = ("   >USER WIN<   "); WIN++; break;
        case 2 : w_d_l = ("   >USER LOSE<   "); LOSE++; break;
        default :
    }

    TEXT = "[USER] " + user + w_d_l + ai + " [COMPUTER]" ;
    document.write(TEXT);
    alert(TEXT); br();

    //document.write(ai + " [COMPUTER]");
    //br();
}

 
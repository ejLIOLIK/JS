function tPrintStr(str){
    resultString = resultString + str ;
}

function Battle(char, mon){
    
    //currentMode = "전투";
    var Char_pA = BatAttack(char.attack);
    var Mon_pA = BatAttack(mon.attack);

    char.hp = char.hp-Mon_pA;
    mon.hp = mon.hp-Char_pA;

    tv("**BATTLE START**");
    br();
    tv(mon.name+"을/를 "+char.name+"이/가 "+Char_pA+"만큼 공격");
    br();
    tv(char.name+"을/를 "+mon.name+"이/가 "+Mon_pA+"만큼 공격");

    hr();
    
    PrintInpo(char, mon);
}
function BatAttack(pATTACK){
    pATTACK = pATTACK+1;
    return Math.floor(Math.random()*pATTACK);
}
function PrintInpo(char, mon){

    st(char.info());

    if (currentMode=="전투") {
        ed(mon.info());
    }
    else if(currentMode=="대기"){
        ed_clear();
    }
}
function BatEnd(char, mon){

    currentMode="대기";

    tv("**BATTLE END**");
    br();
    
    if (char.hp <= 0 && mon.hp <= 0) {
        tv("**DRAW**");
    }
    else if(char.hp <= 0) {
        tv("**DEPEAT**");
    }
    else if (mon.hp <= 0) {
        char.exp = BatExpGold(char, mon);
    }

    st(char.info());
    hr();
}
function BatExpGold(char, mon){

    var monGold=0;

    char.exp = char.exp + mon.exp;
    monGold = Math.floor(Math.random()*mon.gold)+1;
    char.gold = char.gold + monGold; //

    tv("**WIN**");
    br();
    tv(char.name+"이/가 "+char.exp+ " 경험치를 획득"); 
    br();
    tv(char.name+"이/가 "+monGold+ " G를 획득");
    br();

    return char.exp;
}
function controllScoll(){
    enemyScreen.scrollTop = resultScreen.scrollHeight;
    resultScreen.scrollTop = resultScreen.scrollHeight;
    statusScreen.scrollTop = resultScreen.scrollHeight;
}
function Turn(){
    console.log("현재 턴:"+turn);
	input_turn.value = turn;	
    turn = turn +1;
}
function NormalTurn(){
    tv("특별한 것은 보이지 않는다.");
}

function Move(way){

    var tempRoomId = currentRoomId;
    currentMode ="대기";
    Turn();

    switch(way){
        case "동" : currentRoomId = roomArray[FindRoom(currentRoomId)].e; break;
        case "서" : currentRoomId = roomArray[FindRoom(currentRoomId)].w; break;
        case "남" : currentRoomId = roomArray[FindRoom(currentRoomId)].s; break;
        case "북" : currentRoomId = roomArray[FindRoom(currentRoomId)].n; break;
        case "위" : currentRoomId = roomArray[FindRoom(currentRoomId)].u; break;
        case "밑" : currentRoomId = roomArray[FindRoom(currentRoomId)].d; break;
        default:
    }

    if ((currentRoomId) == 0) {
        tv("이동할 수 없다");
        currentRoomId = tempRoomId;
    }
    else {
        tv(way + "쪽으로 이동");
    }

    br();
    NormalTurn();
    br();
    roomArray[FindRoom(currentRoomId)].displayRoomInfo();

    controllScoll();
}
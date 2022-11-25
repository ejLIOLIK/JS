function Setting(){
    roomArray[FindRoom(currentRoomId)].displayRoomInfo(); // 방 정보
    tv(roomArray[FindRoom(currentRoomId)].getRoomEnter()); // 출구 정보
    MonsterGetID(); // 몬스터 ID 부여
    st(elf.info()); // 플레이어 정보
    hr();
}

function MonsterGetID(){
    for(var i=0;i<monArray.length;i++)
    {
        monArray[i].id = i+1;
    }
}

function Move(way){

    var tempRoomId = currentRoomId;

    switch (way) {
    case "동": currentRoomId = roomArray[FindRoom(currentRoomId)].e; break;
    case "서": currentRoomId = roomArray[FindRoom(currentRoomId)].w; break;
    case "남": currentRoomId = roomArray[FindRoom(currentRoomId)].s; break;
    case "북": currentRoomId = roomArray[FindRoom(currentRoomId)].n; break;
    case "위": currentRoomId = roomArray[FindRoom(currentRoomId)].u; break;
    case "밑": currentRoomId = roomArray[FindRoom(currentRoomId)].d; break;
    default:
    }
    
    if(currentMode=="전투"){ // 도망
        
        currentMode = "대기";

        if ((currentRoomId) == 0) {
            tv("** 이동할 수 없다 \n");
            currentRoomId = tempRoomId;
        }
        else {
            tv(way +"쪽으로 도망 \n");
        }
    }
    else if(currentMode=="대기" || currentMode=="전투가능"){

        if ((currentRoomId) == 0) {
            tv("** 이동할 수 없다 \n");
            currentRoomId = tempRoomId;
        }
        else {
            tv(way + "쪽으로 이동 \n");
        }

        roomArray[FindRoom(currentRoomId)].displayRoomInfo();
        tv(roomArray[FindRoom(currentRoomId)].getRoomEnter());

        CounterMon();
    }

    if (currentMode == "전투" || currentMode == "전투가능") {
        TurnBotton();
    }
    else{
        Turn();
    }

    controllScoll();

}

function CounterMon(){

    var monStr = "";

    for(var i=0; i<monArray.length;i++){
        if(monArray[i].location==currentRoomId){
            if(monArray[i].aggressionType == "H"){
                monStr = monStr + "적대적인 몬스터 있음. \n\n";
                
                currentMode = "전투";
                tv(monStr);
                tv("**BATTLE START** \n");

                return;
            }
            else if(monArray[i].aggressionType == "N"){
                monStr = monStr + "몬스터 있음. \n";

                currentMode = "전투가능";
                tv(monStr);
                hr();

                return;
            }
        }
    }

    NormalTurn();
    hr();

}

function TurnBotton(){

    var hostileMonsterArray = getCurrentRoomHostileMonsters();
    var noneMonsterArray = getCurrentRoomNoneMonsters();
    var enemy=hostileMonsterArray.length; // 적이 없으면 0, 적이 남아있으면 ++
    
    if(currentMode=="전투"){
        
        if(enemy>0){
            Battle(elf);
        }

        for(var i=0;i<hostileMonsterArray.length;i++){
            if(hostileMonsterArray[i].hp>0){ enemy++; }
            else{
                tv(hostileMonsterArray[i].name+" 처치 \n");
                hostileMonsterArray[i].location=0;
                BatExpGold(elf, hostileMonsterArray[i]);
                PrintInpo(elf, hostileMonsterArray);
                
                enemy--;

                if(enemy==0){
                    BatEnd(elf, hostileMonsterArray);
                }
            }
        }
        
        Turn();
    }
    else if(currentMode=="전투가능"){
        PrintInpo(elf, noneMonsterArray);
    }
    
    // 스크롤 제어
    controllScoll();
}

function Battle(char){

    // 다수전투...
    var hostileMonsterArray = getCurrentRoomHostileMonsters();
    
    var Char_pA ; 
    var Mon_pA ; //데미지 변수
    
    for(var i=0;i<hostileMonsterArray.length;i++)
    {
        Char_pA = BatAttack(char.attack);
        Mon_pA = BatAttack(hostileMonsterArray[i].attack);

        char.hp = char.hp-Mon_pA;
        hostileMonsterArray[i].hp = hostileMonsterArray[i].hp-Char_pA;
        
        br();
        tv(hostileMonsterArray[i].name+"을/를 "+char.name+"이/가 "+Char_pA+"만큼 공격");
        br();
        tv(char.name+"을/를 "+hostileMonsterArray[i].name+"이/가 "+Mon_pA+"만큼 공격");
        
        hr();    
    }

    PrintInpo(char, hostileMonsterArray);
}

// copy
function getCurrentRoomHostileMonsters(){

    var currentRoomHostileMonsterArray = new Array();  // 빈 배열 생성 (갯수 0개)
    for(var i=0;i<monArray.length;i++){
        // 몬스터 리스트의 id와 현재 방 id가 같으면 (즉, 현재 방에 있는 몬스터면) 그리고 적대 몹이면
        if(monArray[i].location == currentRoomId && monArray[i].aggressionType == "H"){   
            currentRoomHostileMonsterArray.push(monArray[i]);  // 배열.push(배열에 넣을 변수) 하면 배열에 값이 추가로 들어감
        }
    }
    return currentRoomHostileMonsterArray; // 현재 방에 있는 몬스터들을 찾아내서 배열로 만든 걸 리턴
}
function getCurrentRoomNoneMonsters(){

    var currentRoomNoneMonsterArray = new Array();  // 빈 배열 생성 (갯수 0개)
    for(var i=0;i<monArray.length;i++){
        // 몬스터 리스트의 id와 현재 방 id가 같으면 (즉, 현재 방에 있는 몬스터면) 그리고 NONE 몹이면
        if(monArray[i].location == currentRoomId && monArray[i].aggressionType == "N"){   
            currentRoomNoneMonsterArray.push(monArray[i]);  // 배열.push(배열에 넣을 변수) 하면 배열에 값이 추가로 들어감
        }
    }
    return currentRoomNoneMonsterArray; // 현재 방에 있는 몬스터들을 찾아내서 배열로 만든 걸 리턴
}

function BatAttack(pATTACK){ // 데미지 랜덤 계산
    pATTACK = pATTACK+1;
    return Math.floor(Math.random()*pATTACK);
}

function BatEnd(char, mon){

    currentMode="대기";

    tv("**BATTLE END**");
    br();
    os_clear();
    
    if(char.hp <= 0) {
        tv("**DEPEAT**");
        currentRoomId = 0;
    }
    else{
        tv("**WIN** \n");
        hr();
    }
}

function BatExpGold(char, mon){

    var monGold=0;

    char.exp = char.exp + mon.exp;
    monGold = Math.floor(Math.random()*mon.gold)+1;
    char.gold = char.gold + monGold; //
    
    br();
    tv(char.name+"이/가 "+mon.exp+ " 경험치를 획득"); 
    br();
    tv(char.name+"이/가 "+monGold+ " G를 획득");
    br();

}

function Turn(){
    console.log("현재 턴:"+turn);
    turn = turn +1;
	input_turn.value = turn;	
}

function NormalTurn(){
    tv("특별한 것은 보이지 않는다. \n");
}

function ObjectScreenClick(monid){

    currentMode = "전투";
    for(var i=0;i<monArray.length;i++){
        if(monArray[i].id==monid){
            monArray[i].aggressionType="H";
        }
    }

    Battle(elf);

    Turn();
    controllScoll();
}
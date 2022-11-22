//
var enemyScreen;
var resultScreen;
var statusScreen;
var inputTurn;

var resultString="";
var statusString="";

var turn = 1;
var currentMode = "전투";

var orc = new Monster("ORC", 100, 50);
var elf = new Character("KIM", 200, 50);

// var room1 = new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0);
// var room2 = new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0);
// var room3 = new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,0,0,0,0);
var currentRoomId = 1002; // 플레이어 위치

/* 방 배열 */
var roomArray = [
    new Room("연습장 입구","연습장으로 들어가는 입구다.",1000,1001,0,0,0,0,0) ,
    new Room("연습장 서쪽","연습장 서쪽이다.",1001,1002,1000,0,0,0,0) ,
    new Room("연습장 중앙","연습장 중앙이다.",1002,0,1001,1004,1003,1005,1006) ,
    new Room("연습장 북쪽","연습장 북쪽이다.",1003,0,0,1002,0,0,0) ,
    new Room("연습장 남쪽","연습장 남쪽이다.",1004,0,0,0,1002,0,0) ,
    new Room("연습장 누각","연습장 누각이다.",1005,0,0,0,0,0,1002) ,
    new Room("연습장 지하","연습장 지하다.",1006,0,0,0,0,1002,0)
];

window.onload = function(){
    
    //textarea로
    enemyScreen = document.getElementById("rpg_enemy_screen"); // ***""
    resultScreen = document.getElementById("rpg_result_screen"); // ***""
    statusScreen = document.getElementById("rpg_status_screen"); // ***""
    inputTurn = document.getElementById("input_turn"); // ***""

    PrintInpo(elf, orc);  
    
}

function TurnBotton(){

    if(currentMode=="전투"){
        if(elf.hp<=0 || orc.hp<=0){
            BatEnd(elf, orc);
            turn = 0;
        }
        else{
            Battle(elf, orc);
        }
    }
    else{
        tv_clear();
    }

    Turn();
    PrintInpo(elf, orc);  

    // 스크롤 제어
    controllScoll();
}
//
var enemyScreen;
var resultScreen;
var statusScreen;
var inputTurn;
var objectScreen;

var resultString="";
var statusString="";

var turn = 1;
var currentMode = "대기"; // 대기, 전투, 전투가능

var elf = new Character("KIM", 200, 50);

var currentRoomId = 1000; // 플레이어 위치
var currentMon;

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

var monArray = [
    new Monster("허수아비1",50,10,1001,"N"),
    new Monster("허수아비2",50,10,1002,"N"),
    new Monster("쥐1",50,15,1003,"H"),
    new Monster("쥐2",50,15,1005,"H"), 
    new Monster("쥐3",50,15,1005,"H"),
    new Monster("왕쥐",100,25,1006,"H")
];

window.onload = function(){
    
    objectScreen = document.getElementById("object_screen");
    resultScreen = document.getElementById("rpg_result_screen"); 
    statusScreen = document.getElementById("rpg_status_screen"); 
    inputTurn = document.getElementById("input_turn"); // ***""

    Setting();
}


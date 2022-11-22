//
var resultScreen;
var resultString="";

window.onload = function(){
    
    //textarea로
    resultScreen = document.getElementById("rpg_result_screen"); // ***""
    
    var orc = new Monster("ORC", 100, 60);
    var elf = new Character("KIM", 200, 60);

    PrintInpo(elf, orc);
        

    // 문자출력 TEST
    // resultString = "결과출력";
    // resultScreen.value = resultString;
    
    while(true){
        Battle(elf, orc);
        if(elf.hp<=0 || orc.hp<=0){
            BatEnd(elf, orc);
            break;
        }
    }

    resultScreen.value = resultString;
}
//

function PrintStr(str){
    resultString = resultString + str ;
}

function Battle(char, mon){
    
    var Char_pA = BatAttack(char.attack);
    var Mon_pA = BatAttack(mon.attack);

    char.hp = char.hp-Mon_pA;
    mon.hp = mon.hp-Char_pA;

    PrintStr("**"+"전투 시작"+"**\n");

    PrintStr(mon.name+"을/를 "+char.name+"이/가 "+Char_pA+"만큼 공격 \n");
    PrintStr(char.name+"을/를 "+mon.name+"이/가 "+Mon_pA+"만큼 공격 \n\n")
    
    PrintInpo(char, mon);
}
function BatAttack(pATTACK){
    pATTACK = pATTACK+1;
    return Math.floor(Math.random()*pATTACK);
}
function PrintInpo(char, mon){
    PrintStr("**STATUS** \n" + char.info() + '\n' +mon.info() + '\n\n');
}
function BatEnd(char, mon){

    PrintStr("**전투 종료** \n");
    
    if (char.hp <= 0 && mon.hp <= 0) {
        PrintStr("**무승부** \n");
    }
    else if(char.hp <= 0) {
        PrintStr("**패배** \n");
    }
    else if (mon.hp <= 0) {
        char.exp = BatExpGold(char, mon);
    }
}
function BatExpGold(char, mon){

    var monGold=0;

    char.exp = char.exp + mon.exp;
    monGold = Math.floor(Math.random()*mon.gold)+1;
    char.gold = char.gold + monGold; //

    PrintStr("**승리** \n");
    PrintStr(char.name+"이/가 "+char.exp+ " 경험치를 획득 \n");
    PrintStr(char.name+"이/가 "+monGold+ " G를 획득 \n\n");
    
    // document.write(char.name+" 승리"); 
    // br();
    // document.write(char.name+"이/가 "+char.exp+ " 경험치를 획득"); 
    // br();
    // document.write(char.name+"이/가 "+monGold+ " G를 획득"); 
    // br(); br();
    
    char.info();

    return char.exp;
}
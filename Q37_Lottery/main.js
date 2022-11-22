const amount_lot=6;

var lottery = new Array(amount_lot); //정규 당첨번호 6개
var lottery_bonus; // 보너스 당첨번호
var lotPick = new Array(amount_lot); //번호 픽 6개
var prize = 0; // 정규 당첨수량

lotPick = [3, 4, 10, 15, 30, 40]; // 

//당첨번호
for(var i=0;i<amount_lot;i++){
    lottery[i]=ranlottery();

    //중복방지
    for(var j=0;j<i;j++)
    {
        if(lottery[i]==lottery[j]) {
            lottery[i] = ranlottery();
            j=0;
        }
    }    
}

//보너스 부여
lottery_bonus=ranlottery();
//보너스 중복 체크
for(var i=0;i<amount_lot;i++){
    if(lottery_bonus==lottery[i]) {
        lottery_bonus = ranlottery();
        i=0;
    }
}

// 2등
// lottery = [3, 4, 15, 30, 7, 40];
// lottery_bonus = 10;
// 4등 (보너스 번호 동일)

document.write("당첨 번호 : "); br();
for(var i=0;i<amount_lot;i++){
    document.write(lottery[i]+" ");
}
br();
document.write("보너스 당첨 번호 : ");
document.write(lottery_bonus); br();
br();
document.write("구매 번호 : "); br();
for(var i=0;i<amount_lot;i++){
    document.write(lotPick[i]+" "); 
}
br();

//비교
for(var i=0;i<amount_lot;i++){
    for (var j = 0; j < amount_lot; j++) {
        if(lottery[i]==lotPick[j]){
            prize++;
        }
    }
}

// 결과
// document.write("도합 :" + prize);

switch(prize){
    case 0:
    case 1:
    case 2: document.write("꽝입니다."); break;
    case 3: document.write("5등입니다."); break;
    case 4: document.write("4등입니다."); break;
    case 5:
        if(lotPick[0]==lottery_bonus || lotPick[1]==lottery_bonus || lotPick[2]==lottery_bonus || lotPick[3]==lottery_bonus || lotPick[4]==lottery_bonus || lotPick[5]==lottery_bonus) {
            document.write("2등입니다.");
        }
        else{
            document.write("3등입니다."); 
        }
        break;
    case 6: document.write("1등입니다."); break;
    default: document.write("ERROR : compare");
}


// ** 함수 **
// 랜덤 숫자 부여
function ranlottery(){ 
    var ran = Math.floor(Math.random()*45)+1;
    return ran;    
}


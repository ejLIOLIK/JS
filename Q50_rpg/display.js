function tv(s){	
	resultString = resultString + s;
	resultScreen.value = resultString;
}
function st(s){	
	statusScreen.value = s;
}
function ed(s){
	enemyScreen.value = s;
}
function os(s){
	objectScreen.innerHTML = s;
}

function tv_clear(){	
	resultScreen.value = "";
}
function st_clear(){	
	statusScreen.value = "";
}
function ed_clear(){
	enemyScreen.value = "";
}
function os_clear(){
	objectScreen.innerHTML = "";
}

function hr(){	
	resultString = resultString + "\n==============================================\n";
	resultScreen.value = resultString;
}
function br(){	
	resultString = resultString + "\n";
	resultScreen.value = resultString;
}

function controllScoll(){
	objectScreen.scrollTop = objectScreen.scrollHeight;
    resultScreen.scrollTop = resultScreen.scrollHeight;
    statusScreen.scrollTop = statusScreen.scrollHeight;
}

function PrintInpo(char, mon){

    st(char.info());
    
    var str=""

    if (currentMode=="전투" || currentMode=="전투가능") {
		
        for (var i = 0; i < mon.length; i++) {
			if(mon[i].aggressionType=='H'){
				str = str+ "<span class='monstersH'>"+mon[i].getInfo()+"</span></br>";
			}
			else if(mon[i].aggressionType=='N'){
				str = str+ "<span class='monstersN' id='"+mon[i].id+"' onclick='ObjectScreenClick(this.id)'>"+mon[i].getInfo()+"</span></br>";
			}
        }		

        os(str);
    }
    else if(currentMode=="대기"){
        os_clear();
    }
}
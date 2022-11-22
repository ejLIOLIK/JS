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
function tv_clear(){	
	resultScreen.value = "";
}
function st_clear(){	
	statusScreen.value = "";
}
function ed_clear(){
	enemyScreen.value = "";
}
function hr(){	
	resultString = resultString + "\n==============================================\n";
	resultScreen.value = resultString;
}
function br(){	
	resultString = resultString + "\n";
	resultScreen.value = resultString;
}
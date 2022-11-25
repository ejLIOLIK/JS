function Monster(name, hp, attack, location, aggressionType) {
    //이름 체력 공격력
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.Fullhp = hp;
    this.exp = 100;
    this.gold = 100;
    this.location = location;
    this.aggressionType = aggressionType; // H공격적 F호의적 N없음
    this.id;

    this.getInfo = function() {
        return "[ " + this.name + " ("+this.hp+"/"+this.Fullhp+") ] \n";
    }

}

function Character(name, hp, attack) {
    //이름 체력 공격력
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.Fullhp = hp;
    this.gold = 0;
    
    // 경험치, 레벨
    this.exp = 0;
    this.lever = 1;
    this.expMaxLevel = [200, 400, 900]; // 레벨업에 필요한 exp
    this.expMax = this.expMaxLevel[this.lever-1];

    this.expLevelup = function(){ 
        if(this.exp >= this.expMax){
            this.lever++;
            this.expMax = this.expMaxLevel[this.lever-1];

            tv("**"+this.name +" 의 레벨이 올랐다.**\n");
        }
    }

    this.info = function () {
        this.expLevelup();
        return "[ " + this.name + " ("+this.hp+"/"+this.Fullhp+") lv."+ this.lever+
        " ] (ex:"+this.exp+"/"+this.expMax+") " + this.gold+"G" ;
    }
}
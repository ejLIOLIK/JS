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
    this.exp = 0;
    this.expMax = 300;
    this.gold = 0;

    this.info = function () {
        return "[ " + this.name + " ("+this.hp+"/"+this.Fullhp+") ] (ex:"+this.exp+"/"+this.expMax+") " + this.gold+"G" ;
    }
}
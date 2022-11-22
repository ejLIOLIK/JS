function Monster(name, hp, attack) {
    //이름 체력 공격력
    this.name = name;
    this.hp = hp;
    this.Fullhp = hp;
    this.attack = attack;
    this.exp = 100;
    this.gold = 100;

    this.info = function () {

        return "[ " + this.name + " ("+this.hp+"/"+this.Fullhp+") ]";
        //document.write("[ " + this.name + " ("+this.hp+"/"+this.Fullhp+") ]"); br();
        //document.write("NAME : " + this.name); br();
        //document.write("HP : " + this.hp); br();
        //document.write("ATTACK : " + this.attack); br();
    }
}
function Character(name, hp, attack) {
    //이름 체력 공격력
    this.name = name;
    this.hp = hp;
    this.Fullhp = hp;
    this.attack = attack;
    this.exp = 0;
    this.expMax = 300;
    this.gold = 0;

    this.info = function () {

        return "[ " + this.name + " ("+this.hp+"/"+this.Fullhp+") ] (epx:"+this.exp+"/"+this.expMax+") " + this.gold+"G" ;
        //document.write("[ " + this.name + " ("+this.hp+"/"+this.Fullhp+") ] (epx:"+this.exp+"/"+this.expMax+") " + this.gold+"G"); br();
        //document.write("NAME : " + this.name); br();
        //document.write("HP : " + this.hp); br();
        //document.write("ATTACK : " + this.attack); br();
    }
}
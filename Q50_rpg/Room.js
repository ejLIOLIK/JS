/*
    roomName 방이름
    desc 방설명
    id 방 고유 id ex.1000 1001 ...
    e 동쪽 방의 고유 id (0이면 동쪽으로 연결이 안된 방, 특정id값이면 해당id방과 연결되었다는 뜻)
    w 서 //
    s 남 //
    n 북 //
    u 위 //
    d 밑 //
*/
function Room(roomName,desc,id,e,w,s,n,u,d){
    this.roomName = roomName;
    this.desc = desc;
    this.id = id;
    this.e = e;
    this.w = w;
    this.s = s;
    this.n = n;
    this.u = u;
    this.d = d;

    //방 제목, 방 설명, 연결되는 방 표시
    this.displayRoomInfo = function(){ 
        tv("현재 위치 : ["+this.roomName+"]\n");
    }

    //
    this.getRoomEnter = function(){
        var enters = "출구:[";
        if(e != 0){
            enters = enters + " 동";
        }
        if(w != 0){
            enters = enters + " 서";
        }
        if(s != 0){
            enters = enters + " 남";
        }
        if(n != 0){
            enters = enters + " 북";
        }
        if(u != 0){
            enters = enters + " 위";
        }
        if(d != 0){
            enters = enters + " 밑";
        }
        enters = enters + " ] \n";
        return enters;
    }
}

// 매개변수 id 값을 가진 객체 id를 리턴
function FindRoom(rid) {
    for (var i = 0; i < roomArray.length; i++) {
        if (roomArray[i].id == rid){ 
            return i; 
        }
    }
}



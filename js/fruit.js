/**
 * Created by dell on 2016-11-26.
 */
var fruitObj = function() {
    this.alive = [];//bool
    this.x = [];
    this.y = [];
    this.aneNO = [];
    this.l = [];  // pic length
    this.spd = []; // speed   born speed and up float speed
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
}
fruitObj.prototype.num = 30
fruitObj.prototype.init = function () {
    // fruit state
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.aneNO[i] = 0;
        this.spd[i] = Math.random() * 0.017 + 0.003;//speed [0.005,0.015)
        this.born(i);
        this.fruitType[i] = "";
    }
    this.orange.src = "img/fruit.png";
    this.blue.src = "img/blue.png";
}

fruitObj.prototype.draw = function () {

    for (var i = 0; i < this.num; i++) {

       if(this.alive[i]) {
           if(this.fruitType[i] === "blue"){
               var pic = this.blue;
           }else {
               var pic = this.orange;
           }
           if(this.l[i] <= 15) {  //no result it continue greater
               var NO = this.aneNO[i];
               this.x[i] = ane.headx[NO];
               this.y[i] = ane.heady[NO];
               this.l[i] += this.spd[i] * deltaTime;
               //ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5,this.l[i],this.l[i]);
           }else {
               this.y[i] -= this.spd[i] * 7 * deltaTime;

           }
           ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5,this.l[i],this.l[i]);
           if(this.y[i] < - 10) {
               this.alive[i] = false;
           }
       }
    }
}


fruitObj.prototype.born = function (i){
    // fruit born coord
    this.aneNO[i] = Math.ceil(Math.random() * ane.num);
    this.l[i] = 0;
    this.alive[i] = true;

    var ran = Math.random();
    if(ran < 0.2) {
        this.fruitType[i] = "blue";
    }
    else {
        this.fruitType[i] = "orange";
    }
    //lack this repeat judge !
}

fruitObj.prototype.dead = function (i) {
    this.alive[i] = false;
}

function fruitMonitor() {// 检测果实的数量
    var num = 0;
    for (var i = 0; i < fruit.num; i++) {
        // if fruit alive    calculate this num
        if(fruit.alive[i]) {
            num++;
        }
    }
    if(num < 15) {
        sendFruit();
        return;
    }

}

function sendFruit() {
    for (var i = 0; i < fruit.num; i++) {
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}



//fruitObj.prototype.update = function(){
//    var num = 0;
//    for (var i = 0; i < this.num; i++) {
//        // if fruit alive    calculate this num
//        if(this.alive[i]) {
//            num++;
//        }
//    }
//}
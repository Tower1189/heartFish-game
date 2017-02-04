/**
 * Created by dell on 2016-11-26.
 */
//window.onload = function(){
//    init();
//

//
//
//
//}
    //帧数测试
var lastTime = Date.now();
var deltaTime = 0;
var canvas1;
var ctx1;
var canvas2;
var ctx2;
var canWidth;
var canHeight;
var bgImg = new Image();
var ane;
var fruit;
var mom;
var mx,my;
var babyTail = [];
var babyEye = [];
var babyBody = [];


var momTail = [];
var momEye = [];
var momBodyOrg = [];
var momBodyBlue = [];

var data;

//wave
var wave;
//halo
var halo;

//dust
var dust;
var dustPic = [];








init();


function init() {
    canvas1 = document.getElementById("canvas1");// canvas1 is before//fishes, dust, UI,circle
    ctx1 = canvas1.getContext("2d");
    canvas2 = document.getElementById("canvas2");//canvas2 after//background, ane, fruits
    ctx2 = canvas2.getContext("2d");

    canvas1.addEventListener("mousemove", onMouseMove, false);

    // canvas的 宽高
    canWidth = canvas1.width;
    canHeight = canvas1.height;

    //设置背景图
    bgImg.src = "img/background.jpg"

    ane = new aneObj();
    ane.init();

    //fruit init
    fruit = new fruitObj();
    fruit.init();

    //mom
    mom = new momObj();
    mom.init();

    //init mouse coord
    mx = canWidth / 2;
    my = canHeight / 2;

    //baby
    baby = new babyObj();
    baby.init();

    //baby tail
    for (var i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = "img/babyTail" + i + ".png";
    }
    for (var i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = "img/babyEye" + i + ".png";
    }
    //baby body
    for (var i = 0; i < 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = "img/babyFade" + i + ".png";
    }

    //mom tail
    for (var i = 0; i < 8; i++) {
        momTail[i] = new Image();
        momTail[i].src = "img/bigTail" + i + ".png";

    }
    //mom Eye
    for (var i = 0; i < 2; i++) {
        momEye[i] = new Image();
        momEye[i].src = "img/bigEye" + i + ".png";
    }

    //data calc
    data = new dataObj();

    //mom body  orange  and blue
    for (var i = 0; i < 8; i++) {
        momBodyOrg[i] = new Image();
        momBodyOrg[i].src = "img/bigSwim" + i + ".png";
        momBodyBlue[i] = new Image();
        momBodyBlue[i].src = "img/bigSwimBlue" + i + ".png";
    }

    //font style set   set once is OK
    ctx1.font = "30px Verdana";
    ctx1.textAlign = "center";

    //wave
    wave = new waveObj();
    wave.init();

    //halo
    halo = new haloObj();
    halo.init();

    //dust

    for (var i = 0; i < 7; i++) {
        dustPic[i] = new Image();
        dustPic[i].src = "./img/dust"+ i + ".png";
    }
    dust = new dustObj();
    dust.init();
}





function gameLoop(){
    requestAnimationFrame(gameLoop);
    //根据浏览器自适应调整动画帧数
    //console.log("loop");

    //帧数测试
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    //优化
    if(deltaTime>40){deltaTime=40;}
    //console.log(deltaTime);
    drawBackground();
    ane.draw();

    fruitMonitor();
    fruit.draw();

    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();

    momFruitsCollision();
    momBabyCollision();//mom baby collision

    //baby.draw
    baby.draw();

    //data
    data.draw();

    //wave
    wave.draw();
    //halo
    halo.draw();

    //dust
    dust.draw();
}
gameLoop();


function onMouseMove(e) {
    if(!data.gameOver) {
        if(e.offsetX || e.layerX) {
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e.offsetY;
            //console.log(mx);
        }
    }
}




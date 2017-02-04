/**
 * Created by dell on 2016-11-27.
 */
var momObj = function () {
    this.x = 0;
    this.y = 0;
    this.angle;
    //this.eye = new Image();
    //this.body = new Image();
    //this.tail = new Image();


    this.momTailTimer = 0;
    this.momTailCount = 0;

    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;

    this.momBodyCount = 0;


}


momObj.prototype.init = function () {
    this.x = canWidth / 2;
    this.y = canHeight / 2;
    this.angle = 0;
    //this.eye.src = "img/bigEye0.png";
    //this.body.src = "img/bigSwim0.png";
    //this.tail.src ="img/bigTail0.png";
}

momObj.prototype.draw = function () {
    this.x = lerpDistance(mx, this.x, 0.95);
    this.y = lerpDistance(my, this.y, 0.95);

    //delta angle
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;

    //lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.6);

    //tail
    this.momTailTimer += deltaTime;
    if(this.momTailTimer > 50) {
        this.momTailCount = (this.momTailCount + 1) % 8;
        this.momTailTimer %= 50;
    }
    //eye
    this.momEyeTimer += deltaTime;
    if(this.momEyeTimer > this.momEyeInterval) {
        this.momEyeCount = (this.momEyeCount + 1) % 2;
        this.momEyeTimer %= this.momEyeInterval;
        if(this.momEyeCount == 0) {
            this.momEyeInterval = Math.random() * 1500 + 2000;
        }else {
            this.momEyeInterval = 200;
        }
    }





    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);


    var momTailCount = this.momTailCount;
    var momEyeCounnt = this.momEyeCount;
    var momBodyCount = this.momBodyCount;
    //if org  else blue
    if(data.double == 1) {
        ctx1.drawImage(momBodyOrg[momBodyCount],-momBodyOrg[momBodyCount].width / 2,-momBodyOrg[momBodyCount].height / 2);
    }else {
        ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width / 2,-momBodyBlue[momBodyCount].height / 2);
    }


    ctx1.drawImage(momTail[momTailCount], -momTail[momTailCount].width / 2 + 30, -momTail[momTailCount].height / 2);
    ctx1.drawImage(momEye[momEyeCounnt],-momEye[momEyeCounnt].width / 2,-momEye[momEyeCounnt].height / 2);

    ctx1.restore();

}


function lerpDistance(aim, cur, ratio){
    var delta = cur - aim;
    return aim + delta * ratio;
}

//
function lerpAngle(a, b, t) {
    var d = b - a;
    if(d > Math.PI) {
        d = d - 2 * Math.PI;
    }
    if(d < -Math.PI) {
        d = d + 2 * Math.PI;
    }
    return a + d * t;
}
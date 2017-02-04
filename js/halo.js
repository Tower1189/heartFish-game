var haloObj = function () {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
}
haloObj.prototype.num = 2;
haloObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.r[i] = 0;
    }
}
haloObj.prototype.draw = function () {
    ctx1.save();
    ctx1.lineWidth = 5;
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "rgba(134,45,145,1)";
    for (var i = 0; i < this.num; i++) {
        if(this.alive[i]){
            this.r[i] += deltaTime * 0.06;
            if(this.r[i] > 120) {
                this.alive[i] = false;
            }
            var alpha = 1 - this.r[i] / 100;
            ctx1.strokeStyle = "rgba(203,91,0,"+alpha+")";
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,2 * Math.PI);
            ctx1.stroke();

        }
    }
    ctx1.restore();
}
haloObj.prototype.born = function (x, y) {
    for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
            this.alive[i] = true;
            this.r[i] = 10;
            this.x[i] = x;
            this.y[i] = y;
            //console.log(1);
            return;

        }
    }
}

/**
 * Created by dell on 2016-11-26.
 */

    //set ane
var aneObj = function () {
    //statement ane source and height muster
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.alpha = 0;
    this.amp = [];

}
aneObj.prototype.num = 50;
aneObj.prototype.init = function () {
    //get muster assign
    for (var i = 0; i < this.num; i++) {
        this.rootx[i] = i * 16 + Math.random() *20;
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;
    }
    //console.log("1");
}
aneObj.prototype.draw = function() {
    // start draw
    this.alpha += deltaTime * 0.0008;
    var l = Math.sin(this.alpha);
    ctx2.save();
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineWidth = 20;
    ctx2.lineCap = "round"; //end line stroke
    ctx2.globalAlpha = 0.6;  //opacity
    for (var i = 0; i < this.num; i++) {
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHeight);
        this.headx[i] = this.rootx[i] + l * this.amp[i];
        ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();
}


//context.save();
//context.restore();
/**
 * Created by dell on 2016-11-26.
 */

    //set ane
var aneObj = function () {
    //statement ane source and height muster
    this.x = [];
    this.len = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function () {
    //get muster assign
    for (var i = 0; i < this.num; i++) {
        this.x[i] = i * 16 + Math.random() *20;
        this.len[i] = 200 + Math.random() * 50;
    }
    //console.log("1");
}
aneObj.prototype.draw = function() {
    // start draw
    ctx2.save();
    ctx2.strokeStyle = "#3b154e";
    ctx2.lineWidth = 20;
    ctx2.lineCap = "round"; //end line stroke
    ctx2.globalAlpha = 0.6;  //opacity
    for (var i = 0; i < this.num; i++) {
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight);
        ctx2.lineTo(this.x[i],canHeight - this.len[i]);
        ctx2.stroke();
    }
    ctx2.restore();
}


//context.save();
//context.restore();
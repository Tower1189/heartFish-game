/**
 * Created by dell on 2016-11-29.
 */
//judge fish and ane distance
function momFruitsCollision() {
    if(!data.gameOver) {
        for (var i = 0; i < fruit.num; i++) {
            if(fruit.alive[i]) {
                var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
                if( l < 900) {
                    fruit.dead(i);
                    data.fruitNum++;
                    mom.momBodyCount++;
                    if(mom.momBodyCount > 7) {
                        mom.momBodyCount = 7;
                    }
                    if(fruit.fruitType[i] == "blue")//blue
                    {
                        data.double = 2;
                    }
                }
            }
        }
    }

}

// mom baby collision
function momBabyCollision() {
    var l = calLength2(mom.x, mom.y, baby.x ,baby.y);
    if (data.fruitNum > 0 && !data.gameOver) {
        if( l < 900) {
            //baby recover
            baby.babyBodyCount = 0;
            //data => 0
            //data.reset();
            mom.momBodyCount = 0;
            //score update
            data.addScore();
        }
    }


}







function calLength2(x1, y1, x2, y2) {
    return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}
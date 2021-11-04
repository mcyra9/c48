var startTile;
var tile2;
var tile3;
var tile4;
var tile5;
var tile6;
var tile7;
var tile8;
var tile9;
var tile10;
var tile11;
var tile12;
var endTile;
var plr;
var button;
var atn1;
var atn2;
var end = false;
//var now;

//var days = Math.floor(now / (1000 * 60 * 60 * 24));
//var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
//var seconds = Math.floor((now % (1000 * 60)) / 1000);

function preload(){
  
}

function setup() {
    createCanvas(800, 400);
    startTile = new Tile();
    tile2 = new Tile();
    tile3 = new Tile();
    tile4 = new Tile();
    tile5 = new Tile();
    tile6 = new Tile();
    tile7 = new Tile();
    tile8 = new Tile();
    tile9 = new Tile();
    tile10 = new Tile();
    tile11 = new Tile();
    tile12 = new Tile();
    endTile = new Tile();

    plr = createSprite(60, 350, 20, 50);

    //var now = new Date().getTime();
    //var seconds = Math.floor((now % (1000 * 60)) / 1000);

    //console.log(seconds);
    //seconds = 0;
    //console.log(seconds);
}

function draw() {
    background(0);

    //now = new Date().getTime();
    // = Math.floor((now % (1000 * 60)) / 1000);

    if (plr.x === 515 && plr.y === 77) {
        end = true;
    }

    if (end === true) {
        fill("white");
        textSize(40);
        text("YOU WON", 400, 200);
        noFill();
    }

    if (end === false) {

        if (mousePressedOver(button)) {
            tileSelect();
        }
        if (/*atn2 > atn1 + 1 &&*/ keyDown(RIGHT_ARROW)) {
            moveRight();
        }

        if (/*atn2 > atn1 + 1 &&*/ keyDown(UP_ARROW)) {
            moveUp();
        }

        if (/*atn3 < 0 &&*/ keyDown(LEFT_ARROW)) {
            moveLeft();
        }

        if (/*atn3 < 0 &&*/ keyDown(DOWN_ARROW)) {
            moveDown();
        }
    }

  
    startTile.x = 20;
    startTile.y = 310;
    tile2.x = 111;
    tile2.y = 310;
    tile3.x = 202;
   tile3.y = 310;
   tile4.x = 293;
   tile4.y = 310;
   tile5.x = 384;
    tile5.y = 310;
    tile6.x = 475;
    tile6.y = 310;
    tile7.x = 566;
    tile7.y = 310;
    tile8.x = 657;
    tile8.y = 310;
    tile9.x = 657;
    tile9.y = 219;
    tile10.x = 657;
    tile10.y = 128;
    tile11.x = 657;
    tile11.y = 37;
    tile12.x = 565;
    tile12.y = 37;
    endTile.x = 475;
    endTile.y = 37;

    if (end === false) {
        fill("green");
        startTile.display();
        fill("white");
        tile2.display();
        tile3.display();
        tile4.display();
        tile5.display();
        tile6.display();
        tile7.display();
        tile8.display();
        tile9.display();
        tile10.display();
        tile11.display();
        tile12.display();
        fill("red");
        endTile.display();
        noFill();

        fill("white");
        textSize(40);
        text(atn1, 400, 200);
        drawSprites();
        
    }
    
    //console.log("x" + plr.x);
    //console.log("y" + plr.y);
    //console.log(seconds);

}

function tileSelect() {
    atn1 = Math.round(random(1, 6));
}

function moveRight() {
    if (plr.y === 350 && plr.x >= 60 && plr.x <= 606 || plr.y === 77 && plr.x >= 515 && plr.x <= 606) {
        atn2 -= 1;
        
        plr.x += 91;
    }
}

function moveUp() {
    if (plr.x === 697 && plr.y <= 350 && plr.y >= 168) {
        atn2 -= 1;
        
        plr.y -= 91;
    }
}

function moveLeft() {
    if (plr.y === 350 && plr.x >= 151 && plr.x <= 697 || plr.y === 77 && plr.x >= 606 && plr.x <= 697) {
        
        atn2 += 1;
        plr.x -= 91;
    }
}

function moveDown() {
    if (plr.x === 697 && plr.y <= 259 && plr.y >= 77) {
        
        atn2 += 1;
        plr.y += 91;
    }
}

var bgImage
var soilder
var sfImg
var sbImg
var slImg
var srImg
var sReachImg


function preload(){
    bgImage = loadImage("assets/militaryBase.jpg");
    sfImg = loadImage("assets/soliderfront.png");
}

function setup(){
    var canvas = createCanvas(1940,900);
    background(bgImage);
    soilder = createSprite(20,200, 50, 50);
    soilder.addImage(sfImg)
    soilder.scale = 0.3
    soilder.setCollider("rectangle",0,0,300,300)
   
}

function draw(){
    drawSprites();
}

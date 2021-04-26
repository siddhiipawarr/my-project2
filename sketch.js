
var jethalal,daya,babita;
var jethalalImg;
var dayaGrp , babitaGrp;


function preload(){
jethalalImg=loadImage("Images/jethalal.png");
dayaImg=loadImage("Images/daya.png");
babitaImg=loadImage("Images/babita.png");
dayaImg=loadImage("Images/daya.png");

dayaSound=loadSound("Images/daya.mp3");

}

function setup() {
  createCanvas(600,800);
 
  jethalal=createSprite(300,600,50,50);
  jethalal.addImage("jethalal",jethalalImg);
  jethalal.scale=0.8;
  
  
 dayaGrp=new Group();
  babitaGrp=new Group();

}

function draw() {
  background('gold');  

if ( keyDown ("left_arrow") ) {
jethalal.x = jethalal.x-3;

}
if(keyDown("right_arrow")){
  jethalal.x = jethalal.x+3;
}
spawnBabita();
spawnDaya();
  drawSprites();
  


}


function spawnBabita(){
if(frameCount % 400 === 0){
  babita=createSprite(Math.round(random(50,550)),-50);
  babita.addImage("babita",babitaImg);
  babita.scale=0.8;
  babita.velocityY= 2;
  jethalal.depth = babita.depth;
  jethalal.depth+=1;
  babita.lifetime=800;
  babitaGrp.add(babita);


}
}

function spawnDaya(){
  if (frameCount % 180===0 ){
    daya=createSprite(Math.round(random(120,400)),-50);
    daya.addImage("daya",dayaImg);
    daya.velocityY= 2;
    jethalal.depth = daya.depth;
    jethalal.depth+=1;
    daya.lifetime=800;
    dayaGrp.add(daya);
  }
}

function reset(){




}
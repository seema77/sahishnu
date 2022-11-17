
var b1,b2;


function preload(){
  b1= loadImage("assets/b1.png");
  b2= loadImage("assets/b2.png");

 

}

function setup() {
  createCanvas(1350,600);
l1= createSprite(300,70,20,20);
l1.addImage("b1",b1);
l2= createSprite(300,160,20,20);
l2.addImage("b1",b1);
l3= createSprite(300,250,20,20);
l3.addImage("b1",b1);
l4= createSprite(300,340,20,20);
l4.addImage("b1",b1);
l5= createSprite(300,430,20,20);
l5.addImage("b1",b1);
l6= createSprite(300,520,20,20);
l6.addImage("b1",b1);
l7= createSprite(300,610,20,20);
l7.addImage("b1",b1);


}

function draw() {
  background("black"); 

  
 drawSprites();
}

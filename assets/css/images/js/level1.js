const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

 canvas_width = canvas.width = 1000;
 canvas_height = canvas.height = 400;


 const mainSprite = new Image();
 mainSprite.src = 'rabbit.png'
 
 carrot = new Image();
 carrot.src = 'images/carrots100px.png';

 let x = 20;
let y = 20;
let rabbitWidth = 80;
let rabbitHeight = 80;

let enemyX = 500 ;
let enemyY  = 200; 
let enemyWidth = 80;
let enemyHeight = 80;

 function gameLoop(){
    ctx.drawImage(mainSprite, 0, 0, 575, 523, x, y, rabbitWidth, rabbitHeight);
    ctx.drawImage(carrot, 0, 0, 100, 100, enemyX, enemyY, enemyWidth, enemyHeight);
    requestAnimationFrame(gameLoop)
 }
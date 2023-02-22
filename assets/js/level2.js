// initializing the canvas and storing both canvas and context in variables
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// difing canvas width and height
 let canvas_width = canvas.width = 1000;
 let canvas_height = canvas.height = 400;

//getting score, time and lives so that they can be manipulated and the results are visible
//to the user
const score = document.getElementById('score');
let result = 0;

const time = document.getElementById('time');
let timeLeft = 60;

const lives = document.getElementById('lives');
let livesLeft = 5;

//getting more elements from html document and saving them as variables
// So that they can be manipulated
const gameOver = document.getElementById('game-over');
const youWin = document.getElementById('you-win');
const newGame = document.getElementById('restart-button');
const nextLevel = document.getElementById('nxt-level-button');
const youLoseRabbit = document.getElementById('you-lose');
const youWinRabbit = document.getElementById('you-win-rabbit');
const  upArrow = document.getElementById('up');
const rightArrow = document.getElementById('right');
const downArrow = document.getElementById('down');
const leftArrow = document.getElementById('left');

// Declaring variables as false so that when a specific condition is met
//They can be changed to true
let mobileMoveUp = false;
let mobileMoveRight = false;
let mobileMoveDown = false;
let mobileMoveLeft = false;

//Input variables
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

// declaring game play variables including main dprite, enemies and boundries
// Aswell as audio and images
let x = 20;
let y = 20;
let rabbitWidth = 80;
let rabbitHeight = 80;

let enemyX = 500 ;
let enemyY  = 200; 
let enemyWidth = 80;
let enemyHeight = 80;

let wallOneX = 400;
let wallOneY = 0;
let wallTwoX = 400;
let wallTwoY = 300;
let wallThreeX = 600;
let wallThreeY = 0;
let wallFourX = 800;
let wallFourY = 0;
let wallFiveX = 800;
let wallFiveY = 300;
let wallSixX = 200;
let wallSixY = 100;

let fox1X = 300;
let fox1Y = 300;
let fox1Width = 80;
let fox1Height = 80;

let fox2X = 700;
let fox2Y = 100;
let fox2Width = 80;
let fox2Height = 80;

const superBrocoliArray = [];
let superBrocoliX = 400;
let superBrocoliY = 10;
let superBrocoliWidth = 100;
let superBrocoliHeight = 100;

let speed = 5;
let fox1Speed = 2;
let fox2Speed = 2;

// Image source taken from vexels https://www.vexels.com/png-svg/preview/159517/rabbit-muzzle-ear-illustration
const mainSprite = new Image();
mainSprite.src = 'assets/images/main-rabbit.png';
// Image source taken from clipartlibrary.com
let carrot = new Image();
carrot.src = 'assets/images/carrots.png';
//Image source taken from vexels https://www.vexels.com/png-svg/preview/143075/broccoli-color-icon
let superBrocoli = new Image();
superBrocoli.src = 'assets/images/super-brocoli.png';
//Audio source taken from PixaBay https://pixabay.com/
let rabbitAudio = new Audio();
rabbitAudio.src = 'assets/images/audio/rabbitEating.mp3';
//Audio source taken from PixaBay https://pixabay.com/
let bunnyGrunt = new Audio ();
bunnyGrunt.src = 'assets/images/audio/bunny-grunt.mp3';
//Audio source taken from PixaBay https://pixabay.com/
let boingAudio = new Audio ();
boingAudio.src= 'assets/images/audio/boing-6222.mp3';
//Audio source taken from PixaBay https://pixabay.com/
let celebrate = new Audio ();
celebrate.src ='assets/images/audio/crowd-cheer-ii-6263.mp3';
//Audio source taken from PixaBay https://pixabay.com/
let gameOverAudio = new Audio();
gameOverAudio.src = 'assets/images/audio/game-over-arcade-6435.mp3';
//Audio source taken from PixaBay https://pixabay.com/
let morningBirds = new Audio();
morningBirds.src = 'assets/images/audio/morning-birds.mp3';
//Audio source taken from PixaBay https://pixabay.com/
let eatBrocoli = new Audio();
eatBrocoli.src = 'assets/images/audio/notification-for-game-scenes-132473.mp3';
//Audio source taken from PixaBay https://pixabay.com/
let countDownClock = new Audio();
countDownClock.src = 'assets/images/audio/countdown-clock.mp3';
//Image source taken from https://www.freeiconspng.com/img/35687
const fox1 = new Image();
fox1.src = 'assets/images/foxenemy.png';

const fox2 = new Image();
fox2.src = 'assets/images/foxenemy.png';




//To ensure the main soundscape begins playing upon page load
window.onload = function(){
  morningBirds.play();
};


//Game Loop with functions
function gameLoop (){
    clearScreen();
    inputs();
    mobileInputs();
    boundryCollision();
    enemyBoundryCol();
    wallCol();
    backWallCol();
    mainCollision();
    ctx.drawImage(mainSprite, 0, 0, 575, 523, x, y, rabbitWidth, rabbitHeight);
    ctx.drawImage(carrot, 0, 0, 100, 100, enemyX, enemyY, enemyWidth, enemyHeight);
    ctx.drawImage(fox1, 0, 0 , 100, 100, fox1X, fox1Y, fox1Width, fox1Height);
    ctx.drawImage(fox2, 0, 0 , 100, 100, fox2X, fox2Y, fox2Width, fox2Height);
    drawSBrocoli();
    fox1WallCol();
    fox2WallCol();
    fox1Collision();
    fox2Collision();
    wallOne();
    wallTwo();
    wallThree();
    wallFour();
    wallFive();
    wallSix();
    maxPoints();
    timeLow();
    noLifeLeft();
    requestAnimationFrame(gameLoop);
}

// This function tests whether the timeLeft condition is true and if so
// To produce a certain result
function countDown(){
 timeLeft--;
 time.innerHTML = timeLeft;
 if(timeLeft === 0){
  clearInterval(timerDown);
   canvas.style.backgroundColor = 'black';
   gameOver.style.display = 'block';
   newGame.style.display = 'block';
   canvas.style.display = 'none';
   youLoseRabbit.style.display = 'block';
  upArrow.style.display = 'none';
    rightArrow.style.display = 'none';
    downArrow.style.display = 'none';
    leftArrow.style.display = 'none';
   gameOverAudio.play();
   morningBirds.src = '';
   countDownClock.src = '';
  }
}
//This defines how oftwen the countDown function is called
let timerDown = setInterval(countDown, 1000);

//This conditional statement tests if the value of result = 20 and that the timeLeft
// Is greater than 0
function maxPoints(){
   if(result === 20 && timeLeft > 0){
     youWin.style.display = 'block';
     clearInterval(timerDown);
     canvas.style.display = 'none';
     nextLevel.style.display = 'block';
     youWinRabbit.style.display = 'block';
     upArrow.style.display = 'none';
     rightArrow.style.display = 'none';
     downArrow.style.display = 'none';
     leftArrow.style.display = 'none';
     celebrate.play();
     morningBirds.src = '';
     countDownClock.src = '';
    }
}

//The TimeLow function tests if the timeLeft is less or equal to 10 and if it's true
// changes the color of the canvas to red and begins playing the countdown timer
function timeLow(){
  if(timeLeft <= 10){
    canvas.style.backgroundColor = 'red';
    countDownClock.play();
   
    if(timeLeft === 0 || result === 20){
      countDownClock.src = '';
    }
 }
}
//These functions draw obsticles to the canvas
function wallOne(){
  ctx.fillRect(wallOneX, wallOneY, 20, 150);
}

function wallTwo(){
  ctx.fillRect(wallTwoX, wallTwoY, 20 ,100);
}

function wallThree(){
  ctx.fillRect(wallThreeX, wallThreeY, 20, 200);
}

function wallFour(){
  ctx.fillRect(wallFourX, wallFourY, 20, 150);
}

function wallFive(){
  ctx.fillRect(wallFiveX, wallFiveY, 20, 100);
}

function wallSix(){
  ctx.fillRect(wallSixX, wallSixY, 20, 300);
}

//This function tests if the main sprite X or Y position collides with the canvas boundry 
// The function stops the main sprite exiting the canvas by declaring either the X or Y variable
// as the edge of the boundry if the condition is true

function boundryCollision(){
  if(x < 0){
     x = 0;
  }
 if( x >= 920){
      x = 920;
 }
  if(y < 0){
   y = 0;
 }
 if(y >= 320){
    y = 320;
 }
}


// This function performs the same task as the function above but with the enemy
// sprites
function enemyBoundryCol (){
  if(enemyX < 0){
    enemyX = 0;
    }
if( enemyX >= 920){
    enemyX = 920 ;
 }
   
 if(enemyY < 0){
  enemyY = 0;
}
if(enemyY >= 320){
   enemyY = 320;
}
}
//The wallCol function is similar to the boundryCol function 
// It tests whether or not the X or Y coordinates are equal to the X or Y coordinates
// of the walls that have been drawn to the canvas
function wallCol(){
  if(x === 350 && y < 150 ){
    x = 0;
    boingAudio.play();
 }
 if(x === 350 && y > 250 ){
  x = 0;
  boingAudio.play();
}
if(x === 550 && y < 200 ){
  x = 0;
  boingAudio.play();
}
if(x === 750 && y < 150 ){
  x = 0;
  boingAudio.play();
}
if(x === 750  && y > 250 ){
  x = 0;
  boingAudio.play();
}
if(x === 150 && y > 50 ){
  x = 0;
  boingAudio.play();
}
}

//This function is similar to the function above but with the Main sprite approachig
// from the right

function backWallCol(){
  if(x === 380  && y  < 150 ){
    x = 0;
    boingAudio.play();
 }
 if(x === 380 && y > 250 ){
  x = 0;
  boingAudio.play();
}
if(x === 580 && y < 200 ){
  x = 0;
  boingAudio.play();
}
if(x === 780 && y < 150 ){
  x = 0;
  boingAudio.play();
}
if(x === 780  && y > 250 ){
  x = 0;
  boingAudio.play();
}
if(x === 180  && y  > 50 ){
  x = 0;
  boingAudio.play();
}
}

// These function allow for the enemy to detect the boundry wall and if
// a collision happens the direction of the enemy is reversed
function fox1WallCol(){
    if(fox1Y  === 0 || fox1Y + 80 === 400){
        fox1Speed = -fox1Speed;
    }
    
     fox1Y += fox1Speed;
    }

    function fox2WallCol(){
        if(fox2Y  === 0 || fox2Y + 80 === 400){
            fox2Speed = -fox2Speed;
        }
        
         fox2Y += fox2Speed;
        }
        
          //This function tests if a collision between the rabbit and carrot is true
          // If a collision happens the carrot will move to another point on the canvas
         // if the collision happens the users score will also increase by 1

        function mainCollision(){
          if (x + 60 >= enemyX  &&
             y + 60 >= enemyY &&
            x <= enemyX + 60 &&
            y <= enemyY + 60){
              let xCoOrd = [];
              let deleteNums = [120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 
                160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
                200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
                320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340 ,341, 342, 343, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399,
                400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435,
                436, 437, 438, 439, 440, 
                520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589,590, 591, 592, 593, 594, 595, 596, 597, 598, 599,
                600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620,
                720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799,
                800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820];
             for (let i = 0; i < 1001; i++) {
                 xCoOrd.push(i);
                }
        
                  let newX =  xCoOrd.filter(function(value){
                  return !deleteNums.includes(value);
                 }) ;
        
                 let enemyXValue = newX[Math.floor(Math.random() * newX.length)];
                  console.log(enemyXValue);
                 enemyX = enemyXValue;
                 enemyY = Math.floor(Math.random() * 320);
              enemyY = Math.floor(Math.random() * 320);
              result++;
              score.innerHTML = result;
              rabbitAudio.play();
            }
        }

// These function tests if the main sprite and the enemy collide
// if the condition is true the main sprite will lose a life and be played at the 
// start of the canvas

function fox1Collision (){
    if ((x + 60 >= fox1X  &&
        y + 60 >= fox1Y &&
       x <= fox1X + 60 &&
       y <= fox1Y + 60)){
         x = 0;
         bunnyGrunt.play();
         livesLeft--;
         lives.innerHTML = livesLeft;
    }
}

function fox2Collision (){
    if ((x + 60 >= fox2X  &&
        y + 60 >= fox2Y &&
       x <= fox2X + 60 &&
       y <= fox2Y + 60)){
         x = 0;
         bunnyGrunt.play();
         livesLeft--;
         lives.innerHTML = livesLeft;
    }
}

// This function is called when the timeLeft is less than 20 but greater than 10
// if the rabbit and brocoli collide the users life count will increase by 1

function drawSBrocoli(){
  if(timeLeft < 20 && timeLeft > 10){
   ctx.drawImage(superBrocoli, 0, 0, 100, 100, superBrocoliX, superBrocoliY, superBrocoliWidth, superBrocoliHeight);
   superBrocoliArray.push(superBrocoli);
  }
   if(superBrocoliArray.length >= 2){
     superBrocoliArray.pop();

     if(x + 60 >= superBrocoliX  &&
       y + 60 >= superBrocoliY &&
      x <= superBrocoliX + 60 &&
      y <= superBrocoliY + 60){
              superBrocoli.src = '';
              superBrocoliX = 1000;
              superBrocoliArray.pop();
              livesLeft ++;
              lives.innerHTML = livesLeft;
              eatBrocoli.play();
     }
     console.log(superBrocoliArray.length);
   }
}

// This function tests if the users life count is equal to 0 
// if it is the game over screen is called

function noLifeLeft(){
  if (livesLeft === 0){
    canvas.style.backgroundColor = 'black';
    gameOver.style.display = 'block';
    newGame.style.display = 'block';
    canvas.style.display = 'none';
    youLoseRabbit.style.display = 'block';
   upArrow.style.display = 'none';
     rightArrow.style.display = 'none';
     downArrow.style.display = 'none';
     leftArrow.style.display = 'none';
    morningBirds.pause();
    gameOverAudio.play();
    livesLeft = 5;
  }
}

// This function clears the screen every animation frame
function clearScreen(){
    ctx.clearRect(0, 0, canvas_width, canvas_height);
}

// Below are all the event listeners for the directional buttons that appear on tablet and 
//Mobile devices
document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);
upArrow.addEventListener('touchstart', mobileUpMouseDown);
rightArrow.addEventListener('touchstart', mobileRightMouseDown);
downArrow.addEventListener('touchstart', mobileDownMouseDown);
leftArrow.addEventListener('touchstart', mobileLeftMouseDown);
upArrow.addEventListener('touchend', mobileUpMouseUp);
rightArrow.addEventListener('touchend', mobileRightMouseUp);
downArrow.addEventListener('touchend', mobileDownMouseUp);
leftArrow.addEventListener('touchend', mobileLeftMouseUp);

// The following functions down to the end of the script have been used and modified for the purposes of this project
// The resouces that have been  used are a combination of two youtube lessons
// the first is from youtube channel Frank's Laborotory https://www.youtube.com/watch?v=EYf_JwzwTlQ
// the second is from the youtube channel coding with adam https://www.youtube.com/watch?v=UUFPEgRKwf4


function mobileUpMouseDown(e){
 if(e.type === 'touchstart'){
   mobileMoveUp = true;
   upArrow.style.backgroundColor = 'orange';
 } 
}
function mobileRightMouseDown(e){
if(e.type === 'touchstart'){
  mobileMoveRight = true;
  rightArrow.style.backgroundColor = 'orange';
}
}
function mobileDownMouseDown(e){
if(e.type === 'touchstart'){
    mobileMoveDown = true;
    downArrow.style.backgroundColor = 'orange';
  }
}
function mobileLeftMouseDown(e){
 if(e.type === 'touchstart'){
  mobileMoveLeft = true;
  leftArrow.style.backgroundColor = 'orange';
 }
}

function mobileUpMouseUp(e){
  if(e.type === 'touchend'){
   mobileMoveUp =  false;
   upArrow.style.backgroundColor = 'white';
  }
}
function mobileRightMouseUp(e){
  if(e.type === 'touchend'){
   mobileMoveRight = false;
   rightArrow.style.backgroundColor = 'white';
  }
}
function mobileDownMouseUp(e){
  if(e.type === 'touchend'){
   mobileMoveDown = false;
   downArrow.style.backgroundColor = 'white';
  }
}
function mobileLeftMouseUp(e){
  if(e.type === 'touchend'){
   mobileMoveLeft = false;
   leftArrow.style.backgroundColor = 'white';
  }
}

function mobileInputs(){
  if(mobileMoveUp){
    y = y - speed;
  }

  if(mobileMoveRight){
    x = x + speed;
  }
  if(mobileMoveDown){
    y = y + speed;
  }

  if(mobileMoveLeft){
    x = x - speed;
  }
}

function inputs (){
  if (upPressed){
     y = y - speed;
  }
  if(downPressed){
    y = y + speed;
  }
  if (leftPressed){
    x = x - speed;
 }
 if(rightPressed){
   x = x + speed;
 }
}


function keyDown (event){
  if( event.keyCode == 40){
      downPressed = true;
  }

  if( event.keyCode == 38){
    upPressed = true;
}
if( event.keyCode == 37){
    leftPressed = true;
}

if( event.keyCode == 39){
  rightPressed = true;
}
}

function keyUp(event){
    if( event.keyCode == 40){
        downPressed = false;
    }
  
    if( event.keyCode == 38){
      upPressed = false;
  }
  if( event.keyCode == 37){
      leftPressed = false;
  }
  
  if( event.keyCode == 39){
    rightPressed = false;
  }
}

gameLoop();
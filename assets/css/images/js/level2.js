const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

 canvas_width = canvas.width = 1000;
 canvas_height = canvas.height = 400;


const score = document.getElementById('score');
let result = 0;

const time = document.getElementById('time');
let timeLeft = 60;

const lives = document.getElementById('lives');
let livesLeft = 5;

const gameOver = document.getElementById('game-over');
const youWin = document.getElementById('you-win');
const newGame = document.getElementById('restart-button');
const nextLevel = document.getElementById('nxt-level-button');
const youLoseRabbit = document.getElementById('you-lose');
const youWinRabbit = document.getElementById('you-win-rabbit');
const btnDisappear = document.getElementsByClassName('direction-btn-container');
const  upArrow = document.getElementById('up');
const rightArrow = document.getElementById('right');
const downArrow = document.getElementById('down');
const leftArrow = document.getElementById('left');

let mobileMoveUp = false;
let mobileMoveRight = false;
let mobileMoveDown = false;
let mobileMoveLeft = false;


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



const mainSprite = new Image();
mainSprite.src = 'assets/css/images/main-rabbit.png'

carrot = new Image();
carrot.src = 'assets/css/images/carrots.png';

const fox1 = new Image();
fox1.src = 'assets/css/images/foxenemy.png';

const fox2 = new Image();
fox2.src = 'assets/css/images/foxenemy.png';


let rabbitAudio = new Audio();
rabbitAudio.src = 'assets/css/images/audio/rabbitEating.mp3';


let boingAudio = new Audio ();
boingAudio.src= 'assets/css/images/audio/boing-6222.mp3';

let bunnyGrunt = new Audio ();
bunnyGrunt.src = 'assets/css/images/audio/bunny-grunt.mp3';

let celebrate = new Audio ();
celebrate.src ='assets/css/images/audio/crowd-cheer-ii-6263.mp3';

gameOverAudio = new Audio();
gameOverAudio.src = 'assets/css/images/audio/game-over-arcade-6435.mp3'

morningBirds = new Audio();
morningBirds.src = 'assets/css/images/audio/morning-birds.mp3';
morningBirds.play();

//Input variables
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

let speed = 5;
let enemySpeed = 2;
let fox1Speed = 2;
let fox2Speed = 2;
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
    noLifeLeft();
    requestAnimationFrame(gameLoop);
};


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
   morningBirds.stop();
  }
};

let timerDown = setInterval(countDown, 1000);

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
     morningBirds.stop();
    }
};


function wallOne(){
  ctx.fillRect(wallOneX, wallOneY, 20, 150);
};

function wallTwo(){
  ctx.fillRect(wallTwoX, wallTwoY, 20 ,100);
};

function wallThree(){
  ctx.fillRect(wallThreeX, wallThreeY, 20, 200);
};

function wallFour(){
  ctx.fillRect(wallFourX, wallFourY, 20, 150);
};

function wallFive(){
  ctx.fillRect(wallFiveX, wallFiveY, 20, 100);
};

function wallSix(){
  ctx.fillRect(wallSixX, wallSixY, 20, 300);
};



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
};



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
};

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
};


function backWallCol(){
  if(x === 370  && y < 150 ){
    x = 0;
    boingAudio.play();
 }
 if(x === 370 && y > 250 ){
  x = 0;
  boingAudio.play();
}
if(x === 570 && y < 200 ){
  x = 0;
  boingAudio.play();
}
if(x === 770 && y < 150 ){
  x = 0;
  boingAudio.play();
}
if(x === 770  && y > 250 ){
  x = 0;
  boingAudio.play();
}
if(x === 170  && y > 50 ){
  x = 0;
  boingAudio.play();
}
};

function fox1WallCol(){
    if(fox1Y  === 0 || fox1Y + 80 === 400){
        fox1Speed = -fox1Speed;
    }
    
     fox1Y += fox1Speed;
    };

    function fox2WallCol(){
        if(fox2Y  === 0 || fox2Y + 80 === 400){
            fox2Speed = -fox2Speed;
        }
        
         fox2Y += fox2Speed;
        };


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
                };
        
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
        };

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
};

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
};

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
};



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
};



function clearScreen(){
    ctx.clearRect(0, 0, canvas_width, canvas_height);
};

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);
upArrow.addEventListener('mousedown', mobileUpMouseDown);
rightArrow.addEventListener('mousedown', mobileRightMouseDown);
downArrow.addEventListener('mousedown', mobileDownMouseDown);
leftArrow.addEventListener('mousedown', mobileLeftMouseDown);
upArrow.addEventListener('mouseup', mobileUpMouseUp);
rightArrow.addEventListener('mouseup', mobileRightMouseUp);
downArrow.addEventListener('mouseup', mobileDownMouseUp);
leftArrow.addEventListener('mouseup', mobileLeftMouseUp);




function mobileUpMouseDown(e){
 if(e.type === 'mousedown'){
   mobileMoveUp = true;
   upArrow.style.backgroundColor = 'red';
 } 
};
function mobileRightMouseDown(e){
if(e.type === 'mousedown'){
  mobileMoveRight = true;
  rightArrow.style.backgroundColor = 'red';
}
};
function mobileDownMouseDown(e){
if(e.type === 'mousedown'){
    mobileMoveDown = true;
    downArrow.style.backgroundColor = 'red';
  }
};
function mobileLeftMouseDown(e){
 if(e.type === 'mousedown'){
  mobileMoveLeft = true;
  leftArrow.style.backgroundColor = 'red';
 }
};

function mobileUpMouseUp(e){
  if(e.type === 'mouseup'){
   mobileMoveUp =  false;
   upArrow.style.backgroundColor = 'white';
  }
};
function mobileRightMouseUp(e){
  if(e.type === 'mouseup'){
   mobileMoveRight = false;
   rightArrow.style.backgroundColor = 'white';
  }
};
function mobileDownMouseUp(e){
  if(e.type === 'mouseup'){
   mobileMoveDown = false;
   downArrow.style.backgroundColor = 'white';
  }
};
function mobileLeftMouseUp(e){
  if(e.type === 'mouseup'){
   mobileMoveLeft = false;
   leftArrow.style.backgroundColor = 'white';
  }
};

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
};


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
};

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
};

gameLoop();
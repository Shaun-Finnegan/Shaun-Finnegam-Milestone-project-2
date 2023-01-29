const instructionBtn = document.getElementById('instruction-btn');
const howToPlay = document.getElementById('instructions-text');
const closeInstructions = document.getElementById('close-instructions');
const canvas = document.getElementById('canvas-main');
const ctx = canvas.getContext('2d');

const animationSprite = new Image();
animationSprite.src = 'assets/css/images/rabbitcarrot.png';
let x =20;
let y = 20;
let reverseX = x--;
let endOfCanvas = false;
let animationSpeed = 1;
const canvasWidth = 500;
const canvasHeight = 300;

function animationLoop(){
    clearAnimationScreen();
    ctx.drawImage(animationSprite, 0, 0, 100, 100, x, y, 50, 50);
    animationWallCol();
    requestAnimationFrame(animationLoop);
}
function animationWallCol(){
if(x + 50 === 300 || x === 0){
    animationSpeed = -animationSpeed;
}

 x += animationSpeed;
};






function clearAnimationScreen(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
};

function showInstructions(){
    howToPlay.style.display = 'block';
    closeInstructions.style.display = 'block';

};

function hideInstructions(){
    howToPlay.style.display = 'none';
    closeInstructions.style.display = 'none';

};

instructionBtn.addEventListener('click', showInstructions);
closeInstructions.addEventListener('click', hideInstructions);

animationLoop();
const instructionBtn = document.getElementById('instruction-btn');
const howToPlay = document.getElementById('instructions-text');
const closeInstructions = document.getElementById('close-instructions');
const canvas = document.getElementById('canvas-main');
const ctx = canvas.getContext('2d');

const animationSprite = new Image();
animationSprite.src = 'assets/css/images/animation rabbit.png';
let x =20;
let y = 20;
let animationSpeed = 5;
const canvasWidth = 1000;
const canvasHeight = 300;

function animationLoop(){
    clearAnimationScreen();
    ctx.drawImage(animationSprite, 0, 0, 100, 100, x, y, 100, 100);
    moveAnimationSprite();
    requestAnimationFrame(animationLoop);
}

function moveAnimationSprite(){
   x++
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
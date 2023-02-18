//getting html elements and storing them in variables so that they 
// can be manipulated
const instructionBtn = document.getElementById('instruction-btn');
const howToPlay = document.getElementById('instructions-text');
const closeInstructions = document.getElementById('close-instructions');
// This function is attached to an event listener so when the how to play
// button is clicked the game instructions become visible
function showInstructions(){
    howToPlay.style.display = 'block';
    closeInstructions.style.display = 'block';
}
// this function is also attached to an event listener and when the close button is
// clicked the game instructions disappear
function hideInstructions(){
    howToPlay.style.display = 'none';
    closeInstructions.style.display = 'none';
}

instructionBtn.addEventListener('click', showInstructions);
closeInstructions.addEventListener('click', hideInstructions);

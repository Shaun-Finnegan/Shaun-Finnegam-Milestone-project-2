const instructionBtn = document.getElementById('instruction-btn');
const howToPlay = document.getElementById('instructions-text');
const closeInstructions = document.getElementById('close-instructions');

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

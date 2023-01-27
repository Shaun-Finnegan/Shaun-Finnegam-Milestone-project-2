const instructionBtn = document.getElementById('instruction-btn');
const howToPlay = document.getElementById('instructions-text');

function showInstructions(){
    howToPlay.style.display = 'block';
};

instructionBtn.addEventListener('click', showInstructions);


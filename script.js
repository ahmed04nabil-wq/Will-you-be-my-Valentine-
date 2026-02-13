const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

let noCount = 0;
const noPhrases = [
    "But strawberries? 🍓🥺",
    "Hearts & roses say otherwise 🌹💕",
    "Coquette bows deserve a yes! 🎀",
    "Pretty please with strawberry on top? 🥺🍓",
    "Can't say no to this aesthetic! 💖",
    "Pretty girl, you're breaking my heart here… one last chance? 💔"
];

function handleNo() {
    noCount++;
    noBtn.textContent = noPhrases[noCount % noPhrases.length];
    yesBtn.style.transform = `scale(${1 + noCount * 0.18})`;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.random() * 60 + 20}vw`;
    noBtn.style.top = `${Math.random() * 50 + 20}vh`;
}

noBtn.addEventListener('click', handleNo);
noBtn.addEventListener('mouseover', () => {
    if (window.innerWidth > 600) handleNo();
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'yes.html';
});
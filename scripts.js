const messages = [
  "You make me smile every day 💕",
  "Our first date still makes me laugh 😂",
  "I love how you always support my crazy ideas 🌸",
  "Final message before the big surprise 🎉"
];

const btn = document.querySelector(".btn");
const messageBox = document.getElementById("random-msg");
const clickCountEl = document.getElementById("click-count");
const finaleSection = document.querySelector(".finale");
const finaleText = document.querySelector(".finale-text");
const photoPlaceholder = document.querySelector(".photo-placeholder");

let clickCount = 0;

// 🎊 Handle button click
btn.addEventListener("click", () => {
  clickCount++;
  clickCountEl.textContent = clickCount;

  // Show message if within array range
  if (clickCount <= messages.length) {
    messageBox.textContent = messages[clickCount - 1];
  }

  // 🎯 Milestone placeholder (example at 25, 50, 75 clicks)
  if ([10, 20, 30, 40, 50, 60, 70, 80, 90, 95].includes(clickCount)) {
    photoPlaceholder.textContent = `📸 Special memory unlocked at ${clickCount} clicks! (replace with photo)`;
  }

  // 🎉 Finale when count reaches 100
  if (clickCount === 100) {
    triggerFinale();
  }
});

// 🎉 Finale function
function triggerFinale() {
  // Hide generator
  btn.style.display = "none";
  messageBox.style.display = "none";

  // Show finale
  finaleSection.style.display = "block";
  finaleText.textContent = "🎊 Happy Birthday, My Love! 🎊\nThank you for being my everything 💜";

  // Launch confetti 🎉
  startConfetti();
}

// 🎊 Confetti effect (basic canvas version)
function startConfetti() {
  const confetti = document.createElement("canvas");
  confetti.id = "confetti-canvas";
  document.body.appendChild(confetti);

  const myConfetti = confetti.getContext("2d");
  confetti.width = window.innerWidth;
  confetti.height = window.innerHeight;

  const pieces = [];
  const numPieces = 150;

  for (let i = 0; i < numPieces; i++) {
    pieces.push({
      x: Math.random() * confetti.width,
      y: Math.random() * confetti.height - confetti.height,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`
    });
  }

  function draw() {
    myConfetti.clearRect(0, 0, confetti.width, confetti.height);
    pieces.forEach((p) => {
      myConfetti.beginPath();
      myConfetti.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
      myConfetti.fillStyle = p.color;
      myConfetti.fill();
    });
  }

  function update() {
    pieces.forEach((p) => {
      p.y += p.speed;
      if (p.y > confetti.height) {
        p.y = -10;
        p.x = Math.random() * confetti.width;
      }
    });
  }

  function loop() {
    draw();
    update();
    requestAnimationFrame(loop);
  }

  loop();
}

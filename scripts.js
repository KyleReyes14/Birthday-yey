// 💬 Your 100 messages
const messages = [
  "Message 1",
  "Message 2",
];

// 📸 Your 100 image paths (match index with messages)
const images = [
  "./selected-img/IMG20240819141632.jpg",
  "./selected-img/83018072_2794905450531392_3413475531088199680_n.jpg",
];

// Select elements
const btn = document.querySelector(".btn");
const messageBox = document.getElementById("random-msg");
const clickCountEl = document.getElementById("click-count");
const collage = document.createElement("div"); // collage container
collage.classList.add("collage");
document.body.appendChild(collage);

const photoPlaceholder = document.querySelector(".photo-placeholder");
const finaleSection = document.querySelector(".finale");
const finaleText = document.querySelector(".finale-text");

let clickCount = 0;

// Handle button click
btn.addEventListener("click", () => {
  if (clickCount < messages.length) {
    // Show current message
    messageBox.textContent = messages[clickCount];

    // Show current photo as main photo
    showMainPhoto(images[clickCount]);

    // If this isn’t the first click, move the previous photo into the collage
    if (clickCount > 0) {
      addImageToCollage(images[clickCount - 1]);
    }

    clickCount++;
    clickCountEl.textContent = clickCount;
  }

  // 🎉 Finale when finished
  if (clickCount === messages.length) {
    triggerFinale();
  }
});

// 🎯 Show current main photo
function showMainPhoto(src) {
  photoPlaceholder.innerHTML = ""; // clear previous
  const img = document.createElement("img");
  img.src = src;
  photoPlaceholder.appendChild(img);
}

// 🖼️ Move old photo into collage
function addImageToCollage(src) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("collage-img");

  // Random placement
  img.style.top = Math.random() * 90 + "%";
  img.style.left = Math.random() * 90 + "%";
  img.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

  collage.appendChild(img);
}

// Finale function
function triggerFinale() {
  btn.style.display = "none";
  messageBox.style.display = "none";

  finaleSection.style.display = "block";
  finaleText.textContent =
    "not sure what to write yet"

  startConfetti();
}

// Confetti
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
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
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

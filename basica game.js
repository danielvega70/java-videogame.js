// Set up canvas element
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set up game objects
const player = {
  x: 50,
  y: 200,
  width: 50,
  height: 50,
  xVelocity: 0,
  yVelocity: 0,
  jumping: false,
  grounded: false
};

const platforms = [
  { x: 0, y: 250, width: 100 },
  { x: 200, y: 250, width: 100 },
  { x: 400, y: 250, width: 100 },
  { x: 600, y: 250, width: 100 },
  { x: 0, y: 500, width: 100 },
  { x: 200, y: 500, width: 100 },
  { x: 400, y: 500, width: 100 },
  { x: 600, y: 500, width: 100 }
];

// Set up game loop
function gameLoop() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw platforms
  ctx.fillStyle = '#333';
  platforms.forEach(platform => {
    ctx.fillRect(platform.x, platform.y, platform.width, 10);
  });

  // Update player
  player.yVelocity += 1;
  player.x += player.xVelocity;
  player.y += player.yVelocity;

  // Check for collisions with platforms
  platforms.forEach(platform => {
    if (player.y + player.height > platform.y && player.y < platform.y + 10 && player.x + player.width > platform.x && player.x < platform.x + platform.width) {
      player.yVelocity = 0;
      player.y = platform.y - player.height;
      player.grounded = true;
    }
  });

  // Check for jumping
  if (player.jumping && player.grounded) {
    player.yVelocity -= 20;
    player.grounded = false;
  }

  // Draw player
  ctx.fillStyle = '#f00';
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Request next frame
  window.requestAnimationFrame(gameLoop);
}

// Start game loop
gameLoop();

// Set up event listeners
document.addEventListener('keydown', event => {
  if (event.code === 'ArrowLeft') {
    player.xVelocity = -5;
  } else if (event.code === 'ArrowRight') {
    player.xVelocity = 5;
  } else if (event.code === 'ArrowUp') {
    player.jumping = true;
  }
});

document.addEventListener('keyup', event => {
  if (event.code === 'ArrowLeft' && player.xVelocity < 0) {
    player.xVelocity = 0;
  } else if (event.code === 'ArrowRight' && player.xVelocity > 0) {
    player.xVelocity = 0;
  } else if (event.code === 'ArrowUp') {
    player.jumping = false;
  }
});

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const spriteImage = new Image();
spriteImage.src = 'sprite.png';

const sprite = {
  x: 50,
  y: 200,
  width: 50,
  height: 50
};

spriteImage.onload = function() {
  ctx.drawImage(spriteImage, sprite.x, sprite.y, sprite.width, sprite.height);
};

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const textureImage = new Image();
textureImage.src = 'texture.png';

textureImage.onload = function() {
  const pattern = ctx.createPattern(textureImage, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

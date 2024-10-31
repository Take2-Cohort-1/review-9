const colorInput = document.getElementById('color-input');
const colorDisplay = document.getElementById('color-display');
const colorLabel = document.getElementById('color-label');
const randomizeButton = document.getElementById('randomize');

const setColor = (color) => {
  colorDisplay.style.backgroundColor = colorInput.value;
  colorLabel.innerText = colorDisplay.style.backgroundColor;
};

colorInput.addEventListener('input', function() {
  setColor(colorInput.value);
});

const randomColors = [
  '#FFB17A',
  '#0A1128',
  '#BEE7B8',
  '#713E5A',
  '#0B4F6C',
  '#20BF55'
];

randomizeButton.addEventListener('click', function() {
  const randomColorIndex = Math.random() * randomColors.length - 1;
  const randomColor = randomColors[randomColorIndex];
  alert(randomColorIndex);
  setColor(randomColor);
});

const tips = [
  "Always keep your eye on the ball",
  "Work on your bowling accuracy",
  "Improve your hand-eye coordination",
  "Master different batting strokes",
  "Understand field placements"
];

function addTip() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  const li = document.createElement('li');
  li.textContent = tip;
  document.getElementById('tips-list').appendChild(li);
}

let currentWorld = 0;

function moveWorlds(n) {
  const worlds = document.querySelector(".Worlds");
  const totalWorlds = document.querySelectorAll(".world").length;
  currentWorld += n;
  if (currentWorld >= totalWorlds) {
    currentWorld = 0;
  } else if (currentWorld < 0) {
    currentWorld = totalWorlds - 1;
  }
    const newTransformValue = -currentWorld * 100 + '%';
    worlds.style.transform = `translateX(${newTransformValue})`;
}

import Player from "./player";

function getRandomOrientation() {
  const index = math.floor(Math.random() * 2);

  return index === 0 ? "h" : "v";
}

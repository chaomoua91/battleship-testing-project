import Player from "./player";

function getRandomOrientation() {
  const index = math.floor(Math.random() * 2);

  return index === 0 ? "h" : "v";
}

export function placeRandom(player) {
  for (let i = 2; i < 7; i++) {
    let x = Math.floor(Math.random() * 10) + 1;
    let y = Math.floor(Math.random() * 10) + 1;
    let orientation = getRandomOrientation();

    let placementResult = player.gameboard.placeShip([x, y], i, orientation);

    while (!placementResult) {
      x = Math.floor(Math.random() * 10) + 1;
      y = Math.floor(Math.random() * 10) + 1;
      orientation = getRandomOrientation();
    }
  }
}

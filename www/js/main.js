import { GameWorker } from "./game.js";

const train_btn = document.getElementById("train");
const reset_btn = document.getElementById("reset");
const results_container = document.getElementById("train_results");
const board = document.getElementById("board");

export async function main() {
  console.log("APP STARTING");

  const worker = await GameWorker.create();

  await update();

  train_btn.addEventListener("click", async () => {
    let timer = 0;

    results_container.innerHTML = `Training... ${timer}s`;

    const interval = setInterval(() => {
      timer++;

      results_container.innerHTML = `Training... ${timer}s`;
    }, 1000);

    const training_results = await worker.train();

    clearInterval(interval);

    results_container.innerHTML = training_results.replaceAll("\n", "<br>");
  });

  reset_btn.addEventListener("click", async () => {
    worker.reset_board();

    await update();
  });

  board.addEventListener("click", async (e) => {
    const index = Number(e.target.dataset.index);

    worker.play_x(index);

    await update();
  });

  async function update() {
    board.board_state = await worker.get_board();
  }
}

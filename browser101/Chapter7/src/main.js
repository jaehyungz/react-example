"use-strict";
import PopUp from "./popup.js";
import { GameBuilder, Reason } from "./game.js";
import * as sound from "./sound.js";
const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
  .withGameDuration(5)
  .withCarrotCount(3)
  .withBugCount(3)
  .build();
game.setGameListener((reason) => {
  let message;

  switch (reason) {
    case Reason.cancel:
      message = "REPLAY ❓";
      sound.playAlert();
      break;
    case Reason.win:
      message = "win ❗️";
      sound.playWin();
      break;
    case Reason.lose:
      message = "lose ❗️";
      sound.playBug();
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});

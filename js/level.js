import * as Game from "./const.js";
import { getRandom, shuffleArray } from "./lib.js";

/* 
  This library have functions that returns the array of emoji 
  after shuffling for given level

  @Author: Siken Man Dongol
  @Date  : April 20 - 26, 2023
*/

export function getEmojis(level) {
  switch (level) {
    case Game.LEVEL_4_X_4:
      return getEmojis4x4();
    case Game.LEVEL_4_X_5:
      return getEmojis4x5();
  }
}

function getEmojis4x4() {
  const emoji44 = [
    ["🐶", "😎", "🐼", "🌻", "🌍", "👻", "🚀", "🏀"],
    ["c(1)", "c(2)", "c(3)", "c(4)", "c(5)", "c(6)", "c(7)", "c(8)"],
    ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰"],
  ];

  const rndIndex = getRandom(3);
  // making emoji pair (8+8 = 16)
  const emojis = [...emoji44[rndIndex], ...emoji44[rndIndex]];

  const pair = shuffleArray(emojis);
  return pair;
}

function getEmojis4x5() {
  const emoji45 = [
    ["🐶", "😎", "🐼", "🌻", "🌍", "👻", "🚀", "🏀", "⭐", "❤️"],
    ["c(1)", "c(2)", "c(3)", "c(4)", "c(5)", "c(6)", "c(7)", "c(8)", "c(9)", "c(a)"],
    ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰", "🇮🇳", "🇵🇹"],
  ];

  const rndIndex = getRandom(3);
  // making emoji pair (10+10 = 20)
  const emojis = [...emoji45[rndIndex], ...emoji45[rndIndex]];

  const pair = shuffleArray(emojis);
  return pair;
}

/* Note: Microsoft product does not supports flag emoji in their product like VS code, Edge etc */

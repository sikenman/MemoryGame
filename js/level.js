import * as Game from "./const.js";
import { getRandom, shuffleArray, shuffleArrayUnique } from "./lib.js";

/* 
  This library have functions that returns the array of emoji 
  after shuffling for given level

  @Author: Siken Man Dongol
  @Date  : April 20 - 30, 2023
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
    ["🐶", "😎", "🐼", "🌻", "🌍", "👻", "🚀", "🎁"],
    ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰"],
  ];

  const rndIndex = getRandom(2);
  // making emoji pair (8+8 = 16)
  const emojis = [...emoji44[rndIndex], ...emoji44[rndIndex]];

  const pair = shuffleArray(emojis);
  return pair;
}

function getEmojis4x5() {
  const emoji45 = [
    ["🐶", "😎", "🐼", "🌻", "🌍", "👻", "🚀", "🎁", "⭐", "❤️"],
    ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰", "🇮🇳", "🇵🇹"],
  ];

  const rndIndex = getRandom(2);
  // making emoji pair (10+10 = 20)
  const emojis = [...emoji45[rndIndex], ...emoji45[rndIndex]];

  const pair = shuffleArray(emojis);
  return pair;
}

/*
  this function returns 8, 10 pairs of images from the library of pictures
  currently we have library of 40+ pics
  */

export function getPictures(level) {
  let size = 8;
  if (level == Game.LEVEL_4_X_5) size = 10;

  const pics = [
    "c(0),c(1),c(2),c(3),c(4),c(5),c(6),c(7),c(8),c(9),c(a),c(b),c(c),c(d),c(e),c(f)",
    "d(0),d(1),d(2),d(3),d(4),d(5),d(6),d(7),d(8),d(9),d(a),d(b),d(c),d(d),d(e),d(f)",
    "e(0),e(1),e(2),e(3),e(4),e(5),e(6),e(7),e(8),e(9),e(a),e(b),a(1)",
  ];

  // making array out of comma seperated string
  const pics1 = pics[0].split(",");
  const pics2 = pics[1].split(",");
  const pics3 = pics[2].split(",");

  const picsArray = [...pics1, ...pics2, ...pics3];
  const halfPair = shuffleArrayUnique(picsArray, size);

  // making picture pair
  const fullPair = [...halfPair, ...halfPair];

  const pair = shuffleArray(fullPair);
  return pair;
}

/* Note: Microsoft product does not supports flag emoji in their product like VS code, Edge etc */

# MemoryGame
Simple 2D memory game of 4x4 and 4x5.
I have made this game using some of the useful and latest features of ECMAScript.
----
## Features of MemoryGame
- Classic memory game of levels 4 × 4 and 4 × 5.
  - Make use of a 2D array to load the games.
- Two sets of emojis are available at each level.
  - Set of flags emojis.
  - Set of miscellaneous emojis.
- Random sets of emojis are selected at runtime.
- Different color schemes for each game level.
- Animation of cards when clicking on them.
  - CSS animation toggle based on [showAnimation] boolean variable.
- The game over modal dialog box is shown when the user completes the game.
- Emoji (🌍) is used as favicon.

## JavaScript features used
- Used Fisher–Yates shuffling algorithm.
  - [Fisher–Yates Shuffle](https://bost.ocks.org/mike/shuffle/)
- Changing CSS variables through JavaScript.
- Make use of export and import modules with JS files.
- Implemented (Immediately Invoked Function Expressions).
- Context menu on the right click is disabled (via JavaScript).

## CSS features used
- CSS variables were used.
- Selection of text is disabled (via CSS).
- Responsive grid design that adjusts to different screen sizes.
  - CSS media queries for responsive design.

### Sample CSS code used
```css
@media screen and (max-width: 1024px) {
  .grid-container {
    margin-left: 4%;
    margin-right: 4%;
  }
  h1 {
    color: #22212c;
    font-size: 3rem;
    line-height: 3.4rem;
  }
}

.grid-card {
  cursor: pointer;
  font-size: 5.3rem;
  border-radius: 1rem;
  min-width: 8rem;
  min-height: 8rem;
  background-color: #ddd;
  border: 2px solid #d6d6d6;
  height: calc(100vh / var(--card-divisior));

  /* show emoji at the center */
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
```
### Sample JavaScript code used
```javascript
export function setLevelColor(level) {
  let r = document.querySelector(":root");

  let cardColor = null;
  let textColor = null;

  switch (level) {
    case Game.LEVEL_4_X_4:
      cardColor = "lightskyblue";
      textColor = "steelblue";
      break;
    case Game.LEVEL_4_X_5:
      cardColor = "lightseagreen";
      textColor = "rgb(22, 154, 147)";
      break;
  }
  // change the card color
  r.style.setProperty("--card-color", cardColor);
  r.style.setProperty("--status-text-color", textColor);
}

function getEmojis4x4() {
  const emoji44 = [
    ["🐶", "😎", "🐼", "🌻", "🌍", "👻", "🚀", "🏀"],
    ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰"],
  ];

  const rndIndex = getRandom(2);
  // making emoji pair (8+8 = 16)
  const emojis = [...emoji44[rndIndex], ...emoji44[rndIndex]];

  const pair = shuffleArray(emojis);
  return pair;
}
```

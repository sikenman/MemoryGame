/* 
  This is the array shuffle module based on 
  [Fisher–Yates Shuffle](https://bost.ocks.org/mike/shuffle/)

  @Author: Siken Man Dongol
  @Date  : April 20, 2023
*/

export function shuffleArray(array) {
  let size = array.length;
  let tmp, index;

  for (let pass = 1; pass <= 3; pass++) {
    // while there remain elements to shuffle…
    while (size) {
      index = Math.floor(Math.random() * size--);

      // swap with the current element.
      tmp = array[size];
      array[size] = array[index];
      array[index] = tmp;
    }
  }
  return array;
}

/*
  Returns random number between 0 and [max-1]
*/
export function getRandom(max) {
  return Math.floor(Math.random() * max);
}

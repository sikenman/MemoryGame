/* 
  This is the array shuffle module based on 
  [Fisher–Yates Shuffle](https://bost.ocks.org/mike/shuffle/)

  @Author: Siken Man Dongol
  @Date  : April 20-27, 2023
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
  Returns shuffle Array of size n
*/
export function shuffleArrayUnique(array, n) {
  if (n > array.length) {
    console.error("n is greater than the size of the given array");
    return null;
  }
  let tmpShuffled = shuffleArray(array);
  return tmpShuffled.slice(0, n);
}

/*
  Returns random number between 0 and [max-1]
*/
export function getRandom(max) {
  return Math.floor(Math.random() * max);
}

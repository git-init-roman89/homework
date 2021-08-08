// Homework 2, task 1

const logItems = function (array) {
  for (let i = 1; i < array.length; i = i + 1) {
    let output = array[i] + " " + i;
    console.log(output);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Homework 2, task 2

const calculateEngravingPrice = function(message, pricePerWord) {
  let i = message.split(' ').length * pricePerWord;
  return i;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

// Homework 2, task 3

const findLongestWord = function(string) {
let stringCount = string.split(" "),
    longestWord = 0,
    word;
  for (let i = 0; i < stringCount.length; i++) {
      if (longestWord < stringCount[i].length) {
          longestWord = stringCount[i].length;
          word = stringCount[i];
      }
  }
  return word;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
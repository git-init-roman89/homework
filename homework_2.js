// Homework 2, task 1

const logItems = function (array) {
  for (let i = 1; i < array.length; i = i + 1) {
    let output = array[i] + " " + i;
    console.log(output);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

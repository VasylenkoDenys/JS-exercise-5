'use strict';
/*Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве. Решить с использованием стрелочных функций.
*/

// const strings = ["Anton", "Ivan", "Artem"];

const numberOfStrings = (...strings) => strings.length;

/*Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию. */


const calculate = function (operator) {
  debugger; 
  const example = [2,44,55,66,4,3,2];
  switch (operator) {
    case '+':
      return example.reduce((sum, number) => sum + number);
    case '-':
      return example.reduce((difference, number) => difference - number);
    case '*':
      return example.reduce((multiply, number) => multiply * number);
    case '/':
      return example.reduce((division, number) => division / number);
    default:
      return null;
  }
};


// Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.

const arr1 = [3, 5, 6, 7, 88, 99, -55, 87878];

const maxNumber = Math.max.apply(null, arr1);

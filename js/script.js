"use strict";

// let personalMovieDB.count;

// function start() {
//   personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
//   while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//     personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }

// start();

// const personalMovieDB = {
//   count: personalMovieDB.count,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   } else {
//     console.log('База данных скрыта');
//   }
// }

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
  
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
//     console.log('Вы классический зритель');
//   } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
//   } else {
//     console.log('Произошла ошибка');
//   }
// }

// detectPersonalLevel();

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }

// writeYourGenres();

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('Я прошел этот урок!');
// }

// learnJS('Javascript', done);

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log('Test');
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// // console.log(options.name);

// // delete options.name;

// // console.log(options);

// // let counter = 0;

// // for (let key in options) {
// //   counter++;
// //   if (typeof(options[key]) === 'object') {
// //     for (let i in options[key]) {
// //       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //     }
// //   } else {
// //     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //   }
// // }

// // console.log(counter);

// console.log(Object.keys(options).length);

// const arr = [9, 2, 3, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// arr.pop();
// arr.push(10);

// arr[99] = 0;

// console.log(arr.length);

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// })

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(a, b);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(obj);
// console.log(copy);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;

// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// // const newNumbers = copy(numbers);

// // newNumbers.a = 3;
// // newNumbers.c.x = 10;

// // console.log(numbers, newNumbers);

// const add = {
//   d: 17,
//   e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'ssdfsdfsdf';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'fb'];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = {...q};

// console.log(newObj);

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function() {
//     console.log('Привет');
//   }
// };

// const jonh = Object.create(soldier);

// // const john = {
// //   health: 100
// // };

// // john.__proto__ = soldier;

// // Object.setPrototypeOf(john, soldier);

// jonh.sayHello();

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function() {
//     personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//     while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//       personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//   },
//   rememberMyFilms: function() {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
    
//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//       } else {
//         console.log('error');
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: function() {
//     if (personalMovieDB.count < 10) {
//       console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
//       console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//       console.log('Вы киноман');
//     } else {
//       console.log('Произошла ошибка');
//     }
//   },
//   showMyDB: function() {
//     if (!personalMovieDB.privat) {
//       console.log(personalMovieDB);
//     } else {
//       console.log('База данных скрыта');
//     }
//   },
//   toggleVisibleMyDB: function() {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
//   writeYourGenres: function() {
//     for (let i = 1; i < 2; i++) {
//       // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

// //       // if (genre === '' || genre === null) {
// //       //   console.log('Вы ввели некорректные данные');
// //       //   i--;
// //       // } else {
// //       //   personalMovieDB.genres[i - 1] = genre;
// //       // }

// //       let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
// //       if (genres === '' || genres === null) {
// //         console.log('Вы ввели некорректные данные');
// //         i--;
// //       } else {
// //         personalMovieDB.genres = genres.split(', ');
// //         personalMovieDB.genres.sort();
// //       }
// //     }

// //     personalMovieDB.genres.forEach((item, i) => {
// //       console.log(`Любимый жанр ${i + 1} – ${item}`);
// //     });
// //   }
// // };
// console.log(typeof(String(4)));

// console.log(typeof(5 + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// // To Number

// // 1)
// console.log(typeof(+'4'));

// console.log(parseInt('15px', 10));

// let answ = +prompt("", "");

// To boolen

// 0, '', null, undefined, NaN;

let switcher = null;

if (switcher) {
  console.log('Привет');
}

console.log(typeof(Boolean('4')));

"use strict"
// //================================PRACTITE FUNCTION===================================
// let numberOfFilms;
// function start() {
// 	numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");
// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");
// 	}
// }
// start();
//
// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// }
//
// function rememberMyFilms () {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt("Last Film?", "").trim(),
// 			b = prompt("Lvl?", "");
// 		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			console.log("DONE!!!");
// 		}else {
// 			console.log('Error');
// 			i--;
// 		}
// 	}
// }
// rememberMyFilms();
//
// function detectPersonalLvl () {
// 	if (personalMovieDB.count < 10 ) {
// 		console.log("You see small films");
// 	}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		console.log("You are good man!!!");
// 	}else if (personalMovieDB.count >= 30) {
// 		console.log("You love Movies!!!");
// 	}else {
// 		console.log("Error!!!");
// 	}
// }
//
// detectPersonalLvl();
//
// function showMyDb (hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }
// showMyDb(personalMovieDB.privat);
//
//
// function writeYourGenres () {
// 	for (let i = 1; i <= 3; i++) {
// 		personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр фільму ${i}`);
// 	}
// }
//
// writeYourGenres();
// //================================PRACTITE FUNCTION===================================
// // //================================CallBack FUNCTION===================================
// function first() {
// 	setTimeout(function () {
// 		console.log(1);
// 	}, 500
// 	);
// }
//
// function second() {
// 	console.log(2);
// }
// first();
// second();
// function learnJS(lang, callback) {
// 	console.log(`I learn: ${lang}`);
// 	callback();
// }
// function test () {
// 	console.log('I finish this less!')
// }
// learnJS('JS and React', test);
//
// // //================================CallBack FUNCTION===================================

// const obj = new Object();
//
// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	},
// 	makeTest: function () {
// 		console.log('test');
// 	}
// };
//
// options.makeTest();
//
// const {border, bg} = options.colors;
//
// console.log(border);


// console.log(Object.keys(options).length);


// console.log(options['colors']["border"]);


// delete options.name;
// console.log(options);
//
// let counter = 0;
//
//
//
// for (let key in options) {
// 	if (typeof (options) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Властивості ${i}, має значення: ${options[key][i]}`);
// 			counter++;
// 		}
// 	}else {
// 		console.log(`Властивості ${key}, має значення: ${options[key]}`);
// 		counter++;
// 	}
// 	counter++;
// }
//
// console.log(counter);

// arr.push(33);
// console.log(arr);
// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);

// for (let value of arr) {
// 	console.log(arr[value]);
// }

// const arr = [1, 62, 31, 8, 5];
//
// arr.sort(compareNum);
// console.log(arr);
// function compareNum(a,  b) {
// 	return a - b;
// }
//
// arr.forEach(function (item,i,arr) {
// 	console.log(`${i}: ${item} в серединні массиву ${arr}`);
// })


// const str = prompt("", "");
// const products = str.split(', ');
// products.sort();
// console.log(products.join('---'));

//
// let a = 5,
// 		b = a;
//
// b += 5;
// console.log(b);
// console.log(a);
//
// const obj = {
// 	a: 5,
// 	b: 1
// }

// const copy = obj;
// console.log(copy);
// copy.a = 10;
// console.log(copy.a);

// function copy (mainObj) {
// 	let objCopy = {}
// 	let key;
// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}
// 	return objCopy;
// }
// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4
// 	}
// }

// const add = {
// 	d: 17,
// 	e : 20,
// 	f: {
// 		a: 2,
// 		c: 3
// 	}
// }
// const clone = Object.assign({},add);
// clone.d = 55;
// console.log(add);
// console.log(clone);
// console.log(Object.assign(numbers, add));

// const arr = ['a', 'b', 'c'];
// const newArr = arr.slice();
//
// console.log(arr);
// console.log(newArr);
// const newObj = copy(numbers);
// newObj.c.x = 20;
// console.log(newObj);
// console.log(numbers);

// const video = ['youtube', 'vimeo', 'media'],
// 	blogs = ['wordpress', 'livejournal', 'bloger'],
// 	internet = [...video, ...blogs, 'in', 'facebook'];
//
// console.log(internet);
//
//
// function log(a, b, c) {
// 	console.log(a, b, c);
// }
//
// const num = [2, 5, 7];
//
// log(...num);


// const personalPlanPeter = {
// 	name: "Peter",
// 	age: "29",
// 	skills: {
// 		languages: ['ru', 'eng'],
// 		programmingLangs: {
// 			js: '20%',
// 			php: '10%'
// 		},
// 		exp: '1 month'
// 	}
// };
//
// function showExperience(plan) {
// 	const {exp} = personalPlanPeter.skills;
// 	console.log(exp);
// 	return plan;
// }
// showExperience();



//
// function showFamily(arr) {
// 	let str = '';
// 	arr = family;
// 	for (let value of arr) {
// 		str += value;
// 	}
//
// 	if (str === '' ) {
// 		return 'Семья пуста';
// 	}
//
// 	return `Семья состоит из: ${arr.join(' ')}`;
// }
// console.log(showFamily())
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
//
// function showFamily(arr) {
// 	let str = '';
//
// 	for (let value of family) {
// 		str += value;
// 	}
//
// 	if (str === '' &&  arr.length === 0) {
// 		return 'Семья пуста';
// 	}
//
// 	return `Семья состоит из: ${family.join(' ')}`;
// }
// console.log(showFamily());
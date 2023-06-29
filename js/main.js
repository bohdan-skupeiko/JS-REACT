"use strict"

// let num = 220;
//
// function showFirstMessage(text, age) {
// 	console.log(text, age);
// 	num = 21;
// 	console.log(num);
// }
//
//
// showFirstMessage('Hello', 25);
// console.log(num);
//
//
// function calc(a, b) {
// 	return (a + b);
// }
//
// console.log(calc(2,4));
//
//
// function ret() {
// 	let num = 50;
// 	return num;
// }
// const anotherNum = ret();
// console.log(ret());
// console.log(anotherNum);
//
//
//
// const  exo = function () {
// 	console.log("helloo")
// };
// exo()

//
// // const calc = (a, b) => a + b;
// // console.log(calc(3,3));
// const usdCurr = 28.7;
// const eurCurr = 30.01;
// const polCurr = 8.99;
// const discount = 0.9;
//
// function convert (amount, curr) {
// 	return curr * amount;
// }
// convert(400, usdCurr);
// // convert(400, eurCurr);
// // convert(400, polCurr);
//
// function promotion(result) {
// 	console.log(result * discount);
// }
//
// const res = convert(400, usdCurr);
// promotion(res);
//
// promotion(convert(400, usdCurr));

// function test() {
// 	for (let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if(i === 3) return
// 	}
// 	console.log('Done');
// }
//
// test()
//
// // function sayHello(name) {
// // 	return `$SayHello ${name}`;
// // }
// // console.log('Bohdan');
//
// function doNothing() {
// 	return
// }
// console.log(doNothing());

// function sayHello(name) {
// 	return `'Привет, ${name}';`
// }
//
// console.log(sayHello('Bohdan'));
//
//
// function getMathResult(num, repeat) {
// 	if (typeof(repeat) !== 'number' || repeat <= 0) {
// 		return num;
// 	}
// 	let str = '';
// 	for (let i = 1; i <= repeat; i++) {
// 		if (i === repeat) {
// 			str += `${num * i}`;
// 		} else {
// 			str += `${num * i}---`;
// 		}
// 	}
// 	return str;
// }
//
// console.log(4, 5);


// const str = 'test';
// const arr = [1, 2, 4];
//
//
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
//
// let fruit = 'Some fruit';
// console.log(fruit.indexOf("q"));
//
// const logg = "Hello World";
// console.log(logg.slice( 3));
// console.log(logg.substring(3, 5));
// console.log(logg.substr(2,11));
//
// const num = 12.2;
// console.log(Math.round(num));
//
// const test = "12.2px";
// console.log(parseFloat(test));
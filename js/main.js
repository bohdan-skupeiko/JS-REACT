"use strict"

// let num = 50;
//
// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }


// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
// 	if(i === 6) {
// 		// break;
// 		continue;
// 	}
// 	console.log(i);
// }


// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}
// }


// let result = '';
// const lenght = 10;
//
// first: for (let i = 0; i < lenght; i++) {
// 	console.log(`First lvl: ${i}`)
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second lvl: ${j}`);
// 		for (let k = 0; k < 5; k++) {
// 			if (k == 2) break first;
// 			console.log(`Third lvl: ${k}`);
// 		}
// 	}
// }
//
// console.log(result);

// for (let i = 5; i < 11; i++) {
// 	console.log(i);
// }

// for (let i = 20; i > 9; i--) {
// 	if (i === 13) {
// 		break;
// 	}
// 	console.log(i);
// }
// for (let i = 2; i < 11; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i)
// 	}
// }

// let i = 2;
// while (i <= 16) {
// 	if (i % 2 !== 0) {
// 		console.log(i);
// 	}
// 	i++;
// }
//
// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }


function fifthTask() {
	const arrayOfNumbers = [];

	for (let i = 5; i < 11; i++) {
		arrayOfNumbers.push(i);
	}
	// Не трогаем
	return arrayOfNumbers;
}
console.log(fifthTask())
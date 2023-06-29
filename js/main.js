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


// function fifthTask() {
// 	const arrayOfNumbers = [];
//
// 	for (let i = 5; i < 11; i++) {
// 		arrayOfNumbers.push(i);
// 	}
// 	// Не трогаем
// 	return arrayOfNumbers;
// }
// console.log(fifthTask())

// function printNumbersWithStep(N, step) {
// 	for (let i = 1; i <= N; step++) {
// 		console.log(i);
// 	}
// }
// console.log(printNumbersWithStep(7, 3))

// function firstTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const arr = [3, 5, 8, 16, 20, 23, 50];
// 	const result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		result[i] = arr[i];
// 	}
// 	// Не трогаем
// 	return result;
// }
// console.log(firstTask());

// function secondTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];
//
// 	for (let i = 0; i < data.length; i++) {
// 		if (typeof (data[i]) === 'number') {
// 			data[i] = data[i] * 2;
// 		} else if (typeof(data[i]) === 'string') {
// 			data[i] = `${data[i]} - done`;
// 		}
// 	}
// 	console.log(data);
// 	// Не трогаем
// 	return data;
// }
// console.log(secondTask());


// function thirdTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];
// 	const result = [];
// 	for (let i = 0; i < data.length; i++) {
// 		result[i - 1] = data[data.length - i];
// 	}
//
// 	// Не трогаем
// 	return result;
// }
// console.log(thirdTask());

let result = '';
const lines = 6;

for (let i = 1; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		result += " ";
	}
	for (let k = 0; k < 2 * i -1; k++) {
		result += '*';
	}
	result += '\n';
}
console.log(result);



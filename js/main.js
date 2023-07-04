"use strict"

// let arr = [
// 	{
// 		name:'Bohdan', age: 36
// 	},
// 	{
// 		name: 'Kolia', age: 18
// 	},
// 	{
// 		name: 'Olya,',
// 		age: 16
// 	}
// ]

// let result = arr.filter(function (item, index, array) {
// 	return item.age >= 18;
// });
// console.log(result);

// let arr = ['Bohdan', 'Main', 'Best'];
// let arrNumbers = [5, 22, 11];
//
// console.log(arr.reverse());
// // function compareNumeric(a, b) {
// // 	console.log(`Sort: ${a} and  ${b}`);
// // 	if (a > b) return 1;
// // 	if( a == b) return 0;
// // 	if (a < b) return -1;
// // }
// console.log(arrNumbers.reverse((a, b) => a - b));

// let arr = ['Bohdan', 'Main', 'Best'];
// // let result = arr.map(function (item,index,array) {
// // 	return item[1];
// // });
// // let result = arr.join(' , - ');
// // console.log(arr);
// // console.log(result);
//
// // for (let i = 0; i < arr.length; i++) {
// // 	console.log(arr[i]);
// // }
// // for (let arrOne of arr) {
// // 	console.log(arrOne);
// // }
// arr.forEach(function (item, index, array){
// 	console.log(`${item} is for ${index} position in ${array}`);
// })

// let arr = ['Vania', 'Ishtwan'];
// arr.push('Olya');
// console.log(arr);
// arr[1] = 'Petya';
// console.log(arr);
// let arr = 'Vania,ishtvant,Olya';
// let newArr = arr.split(' ');
// console.log(newArr);
//
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
//
// function showFamily(arr) {
// 	let str = '';
//
// 	for (let i of family) {
// 		str += i;
// 	}
//
// 	if (family.length === 0) {
// 		return 'Семья пуста';
// 	}
//
// 	return `Семья состоит из: ${family.join(' ')}`;
// }
// console.log(showFamily())
// const someString = 'This is some strange string';
// function reverse(str) {
// 	let newStr = '';
// 	for (let i = str.length -1; i >= 0; i--) {
// 		newStr += str[i];
// 	}
// 	return newStr;
// }
//
// console.log(reverse(someString));

// const myCity = {
// 	city: 'New York',
// 	cityGreeting () {
// 		console.log('Greetings!!')
// 	}
// }
//
// console.log(myCity);
// console.log(myCity.cityGreeting());

// const test = {
// 	userId: 1,
// 	id: 1,
// 	title: 'Test title',
// 	status: {
// 		completed: false,
// 	},
// }
// const newTest = JSON.stringify(test);
//
// console.log(test);
// console.log(newTest);
//
// const postStringified = JSON.parse(newTest);
// console.log(postStringified);

// const person = {
// 	name: 'Bob',
// 	age: 21,
// 	colega: {
// 		name: 'Bohdan',
// 		age: 22
// 	}
// }
//
// // const person2 = Object.assign({}, person);
//
// // person2.colega.age = 99;
//
// const person2 = {...person};
// person2.age = 29;
// console.log(person2);
// console.log(person);
// let a = 5;
// let b = 3;
//
//
// let c
// c = a + b;
// console.log(c);
//
// a = 8;
// b = 12;
//
// c = a + b;
// console.log(c);
//
//
// function sum(a, b) {
// 	const c = a + b;
// 	console.log(c);
// }
//
//
// sum(2,3)

// function printName() {
// 	console.log('Bohdan');
// }
// setTimeout(printName, 1000);
// setTimeout(printName, 2000);
// setTimeout(printName, 3000);
// setTimeout(printName, 4000);
//
// const a = 5;
// function myFn() {
// 	function innerFn() {
// 		console.log(a)
// 	}
// 	innerFn()
// }
// myFn()
// const soldier = {
// 	health: 400,
// 	armor: 100
// }
//
// const jonh = {
// 	health: 100,
// }
//
// jonh.__proto__ = soldier;
// console.log(jonh)

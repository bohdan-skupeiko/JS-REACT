"use strict"

const box = document.getElementById('box');
console.log(box);

const btn = document.getElementsByTagName('button')[2];
console.log(btn);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
	console.log(item);
});

const oneHeart = document.querySelector('div');

console.log(oneHeart);
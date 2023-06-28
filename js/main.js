"use strict"
const numberOfFilms = +prompt("Скільки фільмів ти вже подивився?", '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};
const a = prompt("Один із останніх фільмів які подивився?", ''),
	b = prompt("На скільки його оцінюєш?", ''),
	c = prompt("Один із останніх фільмів які подивився?", ''),
	d = prompt("На скільки його оцінюєш?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);

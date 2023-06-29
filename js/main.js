"use strict"

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "");
	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

function rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Last Film?", ""),
			b = prompt("Lvl?", "");
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("DONE!!!");
		}else {
			console.log('Error');
			i--;
		}
	}
}
rememberMyFilms();

function detectPersonalLvl () {
	if (personalMovieDB.count < 10 ) {
		console.log("You see small films");
	}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("You are good man!!!");
	}else if (personalMovieDB.count >= 30) {
		console.log("You love Movies!!!");
	}else {
		console.log("Error!!!");
	}
}

detectPersonalLvl();

function showMyDb (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDb(personalMovieDB.privat);


function writeYourGenres () {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр фільму ${i}`);
	}
}

writeYourGenres();
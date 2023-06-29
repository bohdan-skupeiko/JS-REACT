"use strict"

const numberOfFilms = prompt("Скільки фільмів ви вже подивились?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

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



if (personalMovieDB.count < 10 ) {
	console.log("You see small films");
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("You are good man!!!");
}else if (personalMovieDB.count >= 30) {
	console.log("You love Movies!!!");
}else {
	console.log("Error!!!");
}
console.log(personalMovieDB);


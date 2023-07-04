"use strict"

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?", "");
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?", "");
		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLvl: function () {
		if (personalMovieDB.count < 10 ) {
			console.log("You see small films");
		}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("You are good man!!!");
		}else if (personalMovieDB.count >= 30) {
			console.log("You love Movies!!!");
		}else {
			console.log("Error!!!");
		}
	},
	showMyDb: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		}else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i < 2; i++) {
			// let genre = prompt(`Ваш улюблений жанр фільму ${i}`);
			//
			// if (genre == '' || genre == null) {
			// 	console.log('Ви ввели некоректні дані!');
			// 	i--;
			// }else {
			// 	personalMovieDB.genres[i - 1] = genre;
			// }
			let genres = prompt(`Ваш улюблений жанр фільму Введіть через кому ${i}`).toLowerCase();
			if (genres == '' || genres == null) {
				console.log('Ви ввели некоректні дані!');
				i--;
			}else {
				personalMovieDB.genres = genres.split(', ');
				personalMovieDB.genres.sort();
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Улюблений жанр ${i + 1} - це ${item}`)
		})
	}
};

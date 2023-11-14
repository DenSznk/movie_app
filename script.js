"use strict"

const numberOfFilms = +prompt('How many films have you already wached?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: {},
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('last movie?', ''),
        b = prompt('how much you rate it?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
};

if (personalMovieDB.count < 10) {
    console.log("You have been wached a little bit movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic viewer");
} else if (personalMovieDB.count >= 30) {
    console.log("You are a movie buff");
} else {
    console.log("Error");
}

console.log(personalMovieDB);


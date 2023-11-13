"use strict"

const numberOfFilms = +prompt('How many films have you already wached?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: {},
    privat: false
};

const a = prompt('last movie?', ''),
    b = prompt('how much you rate it?', ''),
    c = prompt('last movie?', ''),
    d = prompt('how much you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
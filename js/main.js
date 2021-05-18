// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?',''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?','');
//
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



// if (4 == 9) {
//     console.log('seyozha?')
// } else {
//     console.log('nu ty debik')
// }
//
// if (num < 49) {
//     console.log('Awipka');
// } else if (num > 100) {
//     console.log('2much');
// } else {
//     console.log('dun')
// }
//
// (num === 50) ? console.log('ok') : console.log('owibka');


// const num = 55;
//
// switch (num) {
//     case 49:
//         console.log('naaaah');
//         break;
//     case 100:
//         console.log('naaaaaaaaaah');
//         break;
//     case 50:
//         console.log('yaaaaaas');
//         break;
//     default:
//         console.log('next time, bro');
//         break;
// }

// let num = 50;

// while (num < 55) {
//     console.log(num++);
// }
//
// do {
//     console.log(num++);
// }
// while (num < 55)

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }



const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log('awipka');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Classic')
} else if (personalMovieDB.count >= 30) {
    console.log('Kinoboy')
} else {
    console.log('wth?')
}

console.log(personalMovieDB);

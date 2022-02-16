let movies = document.querySelector('movies');
let card = document.getElementsByClassName('videosCard');
let popular= document.getElementById('popular').value;
let anime= document.getElementById('anime').value;
let crime= document.getElementById('crime').value;


function fillMovie (e, =>{
    const respose = fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=tt2935510", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

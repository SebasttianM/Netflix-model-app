let movies = document.querySelector("movies");
let card = document.getElementsByClassName("videosCard");
let popular = document.getElementById("popular").value;
let anime = document.getElementById("anime").value;
let crime = document.getElementById("crime").value;

const getMovies = (url) => {
  const showMovie = document.querySelector("videosCard");
  showMovie.innerHTML = "";
  fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    data.forEach(movie => {
      const { image } = movie;
      showMovie.innerHTML += `
			<div class='popularMovies'>
				<img src="${image}" class="movieReel" alt="pop">
			`;
		console.log(data)
    })
  })
}

getMovies.addEventListener("click", () =>
  getMovies("http://localhost:4005/movies")
);

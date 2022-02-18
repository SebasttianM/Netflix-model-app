let movies = document.querySelector("movies");
let card = document.getElementsByClassName("videosCard");
let popular = document.getElementById("popular").value;
let anime = document.getElementById("anime").value;
let crime = document.getElementById("crime").value;


const getMovies = async (url) => {
  const response = await fetch(url);
  showMovie.innerHTML = ""
  .then(response => response.json())
  .then(data => {
    data.forEach(movie => {
      const { image } = movie
      showMovie.innerHTML += `
			<div class='popularMovies'>
				<img src="${image}" class="..." alt="...">
      </div>  
			`
      card.appendChild("showMovie")
    })
  })
}
const cardFilled = await request("http://localhost:4000/movies")

// getMovies.addEventListener("", () =>
//   getMovies("http://localhost:4005/movies")
// );

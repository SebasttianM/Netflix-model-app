let movies = document.querySelector("#movies");
let popular = document.getElementById("popular");
let anime = document.getElementById("anime");
let crime = document.getElementById("crime");


const getMoviesCrime = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  const crimen= data.filter((movie)=> movie.category==="Crimenes")
  console.log(crimen);
    crimen.forEach(movie => {
      const { image } = movie
      crime.innerHTML += `
			<div class='crimeMovies'>
				<img src="${image}" width="300px" class="..." alt="...">
      </div>  
			`
      
    })
  
}
getMoviesCrime('http://localhost:4000/movies')


const getMoviesAnime = async (url) => {
  const response= await fetch(url)
  const data= await response.json()
  const animes= data.filter((movie)=> movie.category==="Animes")
  console.log(animes);
    animes.forEach(movie =>{
      const {image} = movie
      anime.innerHTML += `
      <div class= 'animeMovies'>
        <img src="${image}" width="300px" class="..." alt="...">
      </div>  `
    })
}
getMoviesAnime('http://localhost:4000/movies')


const getMoviesPop = async (url) => {
  const response= await fetch(url)
  const data= await response.json()
  const populares= data.filter((movie)=> movie.category==="Accion"||"Terror")
  console.log(populares);
    populares.forEach(movie =>{
      const {image} = movie
      popular.innerHTML += `
      <div class= 'popularMovies'>
        <img src="${image}" width="300px" class="..." alt="...">
      </div>  `
    })
}
getMoviesPop('http://localhost:4000/movies')
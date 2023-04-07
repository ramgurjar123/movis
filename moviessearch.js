
// https://api.themoviedb.org/3/search/company?api_key=d6727a0e9c7edd36258d4ee37b11fc0b&query=bholaa&page=1

const form = document.querySelector("form");
const moviesname = document.querySelector("input")

form.onsubmit = (e) => {
    e.preventDefault()
    fetch("https://api.themoviedb.org/3/search/movie?api_key=d6727a0e9c7edd36258d4ee37b11fc0b&language=en-US&query=" + moviesname.value + "&page=1&include_adult=false")
        .then((response) => { return response.json() })
        .then((result) => {
            
            names(result.results)
        })
}



function names(data) {

    data.forEach((movie) => {

        // const div=document.querySelector("div")
        // document.querySelector("#resuits").append()

        const image = document.createElement("img")
        image.src = "https://image.tmdb.org/t/p/original" + movie.poster_path;

        const head = document.createElement("h1")
        head.innerHTML = movie.original_title;

        document.querySelector("#resuits").append(head);
        document.querySelector("#resuits").append(image);


    })
}
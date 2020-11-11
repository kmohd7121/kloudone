 const APIKEY='5b3ba2216ba16f20a8333c77f4aacbc2';
// const APIURL='https://api.themoviedb.org/3/movie/550?api_key=5b3ba2216ba16f20a8333c77f4aacbc2';
 const url='https://api.themoviedb.org/3/search/movie?api_key=5b3ba2216ba16f20a8333c77f4aacbc2';
// const IMGPATH = 'https://image.tmdb.org/t/p/w1280/';
const buttonElement=document.querySelector('#search');
const inputnElement=document.querySelector('#inputValue');
const movieSearchable=document.querySelector('#movies-searchable');



/*
 <div class="movie">
            <section class="section">
                <img
                   src="https://image.tmdb.org/t/p/w500/r42WcL8xjH3ThQywlSfWgoW4GOU.jpg"
                   alt=""
                   ///////////////////////////////////////////*******     data-movie-id="557"
                /> 
                <img
                src="https://image.tmdb.org/t/p/w500/2DyEk84XnbJEdPlGF43crxfdtHH.jpg"
                alt=""
                data-movie-id="557"
             /> 

            </section>
            <div class=]].+++++++++++++++++++++++++
            "content">
                <p id="content-close">X</p>
            </div>

        </div>
*/ 
function movieSection(movies) {
    return movies.map((movie) => {
        return `
             <img src=${movie.poster_path} data-movie-id=${movie.id}/>
        `;

    })

}
function createMovieContainer(movies){
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class','movie');

    const movieTemplate = `
        <section class="section">
           ${movieSection(movies)}
        </section>
        <div class="content">
            <p id="content-close">X</p>
        </div>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement;

}





buttonElement.onclick = function (event) {
    event.preventDefault();
    const value = inputnElement.value;

    

    const newUrl = url + '&query=' + value;
    fetch(newUrl)
        .then((res) =>res.json())
        .then((data) => {
            //data result.
            const movies  = data.results;
            const movieBlock = createMovieContainer(movies);
            movieSearchable.appendChild(movieBlock);
            //const movieBlock = createMovieContainer(movies);
            console.log('Data:',data);
        })
       .catch((error) => {
            console.log('error: ',error);
        });
    console.log('Value',value);

    //console.log('hello world, this button has been clicked');
}
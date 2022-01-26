
import './Movies.css';
import { useState, useEffect } from 'react';
import Movie from './../parts/Movie';

function Movies(props) {

    const [movies, setMovies] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState([]);
    const headerText = "Explore your next Movies and tv shows";
    const searchTitle = "Search movies by title, synopsis or release year";
    const searchPlaceholder = "This is where you type...";

    const getMovies = () => {
        fetch('movies')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setMovies(data);
                setSearchedMovies(data);
            });
    };

    const search = (e) => {
        let query = e.target.value;
        setSearchedMovies(movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()) || movie.synopsis.toLowerCase().includes(query.toLowerCase()) || movie.released.toLowerCase().includes(query.toLowerCase())));
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div className="movies">
            <h1>{headerText}</h1>
            <label for='searchMovie'>{searchTitle}</label>
            <br />
            <input id='searchMovie' type='text' placeholder={searchPlaceholder} onKeyUp={search} />
            <div className='moviesList'>
                {searchedMovies.map((movie, i) => <Movie selectMovie={props.selectMovie} key={i} title={movie.title} released={movie.released} image={movie.image} rating={movie.rating} id={movie.id} />)}
            </div>
        </div>
    );
}

export default Movies;

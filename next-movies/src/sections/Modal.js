import './Modal.css';
import './../parts/Movie';
import Star from './../assets/star.svg';
import Arrow from './../assets/arrow.svg';
import { useState, useEffect } from 'react';
import decodeHTML from './../parts/decodeHTML';

function Modal(props) {
    const showHideClassName = props.show ? "display-block" : "display-none";
    const [movie, setMovie] = useState([]);
    const backButtonText = "Back to list";

    // This is actually not necessarry because I already have all the movie details and I can just pass the entire movie details as a prop
    // However this will not scale well if there are millions of movies
    // Also it will not work well with a router when a user would navigate to a specific page
    // So I'm fetching the movie details here
    const getMovieDetails = (id) => {
        fetch('movies/' + id)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setMovie(data[0]);
            });
    };

    useEffect(() => {
        getMovieDetails(props.movie);
    }, [props.movie])

    return (
        <div className={"modal " + showHideClassName} onClick={props.handleClose}>
            <div className={"modal-content " + showHideClassName}>
                <div className="modal-body">
                    <img className='movieDetailsImage' src={movie.largeimage} />
                    <div className='movieDetails'>
                        <div>
                            <h2>{decodeHTML(movie.title)}</h2>
                            <div className='movieTime'>{movie.runtime}</div>
                            <div className='rating'><img className='star' src={Star} /><span>{movie.rating}/10</span></div>
                            {/* Using dangerouslySetInnerHTML is not recommended but since the synopsis contains html tags it's an option to use */}
                            <div className='movieSynopsis' dangerouslySetInnerHTML={{ __html: movie.synopsis }}></div>
                        </div>
                        <div>
                            <div className='closeModal actionButton' onClick={props.handleClose}><img className='arrowLeft' src={Arrow} /><span>{backButtonText}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

import './Movie.css';
import Star from './../assets/star.svg';
import Arrow from './../assets/arrow.svg';
import decodeHTML from './decodeHTML';


function Movie(props) {

    const readMore = "Read more";

    return (
        <div className="movie">
            <img className='movieImage' src={props.image} alt={props.title} />
            <h3 className='movieTitle'>{decodeHTML(props.title)} ({props.released})</h3>
            <div className='rating'><img className='star' src={Star} /><span>{props.rating}</span></div>
            <div className='actionButton' onClick={(e) => props.selectMovie(props.id)}><span>{readMore}</span><img className='arrow' src={Arrow} /></div>
        </div>
    );
}

export default Movie;

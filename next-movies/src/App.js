

import { useState, useEffect } from 'react';

import './App.css';
import Header from './sections/Header.js';
import Movies from './sections/Movies.js';
import Footer from './sections/Footer.js';
import Modal from './sections/Modal';


function App() {

    // Modal related functions and variables
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
    }

    const hideModal = (e) => {
        setShow(false);
    }

    const clickHideModal = (e) => {
        let targetClass = e.target.className.split(" ")[0];
        if (targetClass == 'modal' || targetClass == 'closeModal') {
            hideModal();
        }
    }

    // Movie related
    const [movieDetails, setMovieDetails] = useState('');
    const selectMovie = (id) => {
        // console.log(id);
        setMovieDetails(id);
        showModal();
    }

    return (
        <div className="App">
            <Header />
            <Movies selectMovie={selectMovie} />
            <Footer />
            <Modal show={show} handleClose={clickHideModal} closeButton={false} movie={movieDetails} ></Modal>
        </div>
    );
}

export default App;

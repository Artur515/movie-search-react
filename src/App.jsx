import './App.module.css';
import React, {useEffect, useState} from "react";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import style from './App.module.css'
import Main from "./layout/main/Main";
import {MOVIE_API_URL} from "./api/api";
import SearchInput from "./components/search/Search";



const App = () => {


    const [loading, setLoading] = useState(true);
    const [films, setFilms] = useState([])
    const [errorMessage, setErrorMessage] = useState(null);


    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(data => {
                setFilms(data.Search)
                setLoading(false)
            })
    }, [])


    const searchMovies = (str, type = 'all') => {
        setLoading(true)
        setErrorMessage(null)
        fetch(`https://www.omdbapi.com/?apikey=23313bb7&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setFilms(jsonResponse.Search);
                    setLoading(false);
                } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
                }
            });
    }


    return (
        <div className={style.app}>
            <Header/>
            <SearchInput searchMovies={searchMovies}/>
            <Main loading={loading} errorMessage={errorMessage} films={films}/>
            <Footer/>
        </div>
    )
}


export default App;

import './sass/global.scss';
import style from './sass/style.module.scss';
import { BASE_BACKDROP_PATH } from './config/config';
import { seriesAdviserAPI } from './api/api';
import { useEffect, useState } from 'react';
import { SeriesDetails } from './components/SeriesDetails/SeriesDetails';
import { Logo } from './components/Logo/Logo';
import logo from '../src/assets/images/logo.png';
import { SeachBar } from './components/SearchBar/SearchBar';

export const App =  () => {

    function clearError () {
        const paragraphe = document.querySelector('#paragraphe-error');
        const main = document.querySelector('#main');
        main.removeAttribute('style');

        if(paragraphe) {
            paragraphe.remove();
        }
    }

    function errorSerie () {
        const main = document.querySelector('#main');

        let paragraphe = document.querySelector('#paragraphe-error');

        if(!paragraphe) {
            paragraphe = document.createElement('p');
            paragraphe.setAttribute('id', 'paragraphe-error');
            paragraphe.innerText = `Le serveur connait actuellement des perturbations. Veuillez réessayer plus tard.`;
            main.appendChild(paragraphe);
        };
        

        main.style.display = 'flex';
        main.style.justifyContent = 'center';
        main.style.alignItems = 'center';
        paragraphe.style.fontSize = '30px';
        
    }

    const [currentSerie, setCurrentSerie] = useState();    

    // Je récupère la série et la met dans mon state
    const fetchTopRated = async () => {
        try {
            clearError();

            const populars = await seriesAdviserAPI.fetchTopRated();
            if(populars.length > 0) {
                setCurrentSerie(populars[0]);
            }
        } catch (error) {
            errorSerie();
        } 
    }

    useEffect(() => {
        fetchTopRated();
    }, []);
    console.log(currentSerie)
    // Je définis d'abord un fond noir le temps que ma promesse s'exécute puis l'image de la série
    const getBackground = (serie) => {
        if(serie) {
            return `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${BASE_BACKDROP_PATH}${serie.backdrop_path}') no-repeat center / cover`;
        } else {
            return 'black';
        }
    };

    const SearchSerie = async (name) => {
        try {
            const series = await seriesAdviserAPI.searchSerie(name);
            const serie = series[0];
            setCurrentSerie(serie);
            clearError();
        } catch (error) {
            errorSerie();
        } 
    }
    
    return (
        <div 
            className={style.main}
            style={{background: getBackground(currentSerie)}}
        >
            <div className={style.main__header}>
                <div className='row'>
                    <div className='col-4'>
                        <Logo title='Series Adviser' subtitle='Find your favorite show' image={logo} />
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <SeachBar onSubmit={SearchSerie} />
                    </div>
                </div>
            </div>
            <div className={style.main__details} id='main'>
                {currentSerie && <SeriesDetails serie={currentSerie}/>}
            </div>
            <div className={style.main__recommandations}></div>
        </div>
    )
}
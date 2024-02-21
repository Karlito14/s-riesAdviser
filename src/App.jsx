import './sass/global.scss';
import style from './sass/style.module.scss';
import { BASE_BACKDROP_PATH } from './config/config';
import { seriesAdviserAPI } from './api/api';
import { useEffect, useState } from 'react';
import { SeriesDetails } from './components/SeriesDetails/SeriesDetails';
import { Logo } from './components/Logo/Logo';
import logo from '../src/assets/images/logo.png';
import { SeachBar } from './components/SearchBar/SearchBar';
import { TvShowListItem } from './components/TvShowListItem/TvShowListItem';

export const App =  () => {

    // effacement des erreur du catch si tout va bien
    function clearError () {
        const paragraphe = document.querySelector('#paragraphe-error');
        const main = document.querySelector('#main');
        main.removeAttribute('style');

        if(paragraphe) {
            paragraphe.remove();
        }
    }

    // Gestion des erreurs du catch dans le try
    function errorSerie (message) {
        const main = document.querySelector('#main');

        let paragraphe = document.querySelector('#paragraphe-error');

        if(!paragraphe) {
            paragraphe = document.createElement('p');
            paragraphe.setAttribute('id', 'paragraphe-error');
            paragraphe.innerText = message;
            main.appendChild(paragraphe);
        };
        
        main.style.display = 'flex';
        main.style.justifyContent = 'center';
        main.style.alignItems = 'center';
        paragraphe.style.fontSize = '30px'; 
    }

    const [currentSerie, setCurrentSerie] = useState();  
    const [recommandationList, setRecommandationList] = useState();
    
    // Je récupère la série et la met dans mon state
    useEffect(() => {
        const fetchTopRated = async () => {
            try {
                clearError();
    
                const populars = await seriesAdviserAPI.fetchTopRated();
                if(populars.length > 0) {
                    setCurrentSerie(populars[0]);
                }
            } catch (error) {
                errorSerie('Le serveur connait actuellement des perturbations. Veuillez réessayer plus tard.');
            } 
        }
        fetchTopRated();      
    }, []);

    // récupérer les séries recommandées selon la série sélectionné
    useEffect(() => {
        const getRecommandations = async () => {
            try {
                clearError();

                const recommandationList = await seriesAdviserAPI.fetchRecommandations(currentSerie.id);

                if(recommandationList.length > 0) {
                    setRecommandationList(recommandationList.slice(0, 10));
                }

            } catch (error) {
                errorSerie('Le serveur connait actuellement des perturbations. Veuillez réessayer plus tard.');
            }  
        }
        if(currentSerie) {
            getRecommandations();
        }
    }, [currentSerie]);
    
    // Je définis d'abord un fond noir le temps que ma promesse s'exécute puis l'image de la série
    const getBackground = (serie) => {
        if(serie) {
            return `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${BASE_BACKDROP_PATH}${serie.backdrop_path}') no-repeat center / cover`;
        } else {
            return 'black';
        }
    };

    // recherche série par la barre de recherche
    const SearchSerie = async (name) => {
        try {
            const series = await seriesAdviserAPI.searchSerie(name);
            const serie = series[0];
            setCurrentSerie(serie);
            clearError();
        } catch (error) {
            errorSerie('Erreur durant la recherche de séries. Veuillez réessayer plus tard.');
        } 
    }

    const setSerieFromRecommandation = (serie) => {
        setCurrentSerie(serie);
    };
    
    console.log(currentSerie)
    
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
            <div className={style.main__recommandations}>
                {currentSerie && 
                <TvShowListItem 
                    serie={currentSerie} 
                    onClick={setSerieFromRecommandation} 
                />}
            </div>
        </div>
    )
}
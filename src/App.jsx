import './global.css';
import style from './style.module.css';
import { BASE_BACKDROP_PATH } from './config/config';
import { seriesAdviserAPI } from './api/api';
import { useEffect, useState } from 'react';

export const App =  () => {

    const [currentPopularSerie, setCurrentPopularSerie] = useState();    

    // Je récupère la série et la met dans mon state
    const fetchPopulars = async () => {
        const populars = await seriesAdviserAPI.fetchPopular();
        if(populars.length > 0) {
            setCurrentPopularSerie(populars[0]);
        }
    }

    useEffect(() => {
        fetchPopulars();
    }, []);

    // Je définis d'abord un fond noir le temps que ma promesse s'exécute puis l'image de la série
    const getBackground = (serie) => {
        if(serie) {
            return `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${BASE_BACKDROP_PATH}${serie.backdrop_path}') no-repeat center / cover`;
        } else {
            return 'black';
        }
    };
    
    return (
        <div 
            className={style.main}
            style={{background: getBackground(currentPopularSerie)}}
        >
            <div className={style.main__header}>
                <div className='row'>
                    <div className='col-4'>
                        <div>Logo</div>
                        <div>Sous titres</div>
                    </div>
                    <div className='col-sm-12 col-md-4'><input type='text'/></div>
                </div>
            </div>
            <div className={style.main__details}></div>
            <div className={style.main__recommandations}></div>
        </div>
    )
}
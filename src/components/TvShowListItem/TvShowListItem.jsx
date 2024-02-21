import style from './style.module.scss';
import { SMALL_BACKDROP_PATH } from '../../config/config';

export const TvShowListItem = ({ serie, onClick }) => {
    return (
        <div 
            className={style.container} 
            onClick={() => onClick(serie)}
        >
            <img 
                className={style.container__image} 
                alt={`${serie.name}`} 
                src={`${SMALL_BACKDROP_PATH}${serie.backdrop_path}`} 
            />
            <h3 className={style.container__title}>{serie.name}</h3>
        </div>
    )
};
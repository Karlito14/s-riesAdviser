import { TvShowListItem } from '../TvShowListItem/TvShowListItem';
import style from './style.module.scss';

export const TvShowList = ({ seriesList, setSerie }) => {
    return (
        <>
            <p className={style.title}>You may also like :</p>
            <section className={style.container}>
                {seriesList.map((serie, key) => {
                    return (
                        <TvShowListItem 
                            key={key + serie} 
                            serie={serie} 
                            onClick={setSerie} 
                        />
                    )
                })}
            </section>  
        </>
    )
}
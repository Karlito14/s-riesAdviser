import { Date } from '../Date/Date';
import { StarRating } from '../StarRating/StarRating';
import style from './style.module.css';

export const SeriesDetails = ({ serie }) => {
    const rating = (serie.vote_average / 2).toFixed(2);
    return (
        <div>
            <h2 className={style.title}>{serie.name}</h2>
            <div className={style.rating_container}>
                <StarRating rating={rating} />
                <p className={style.rating_container__rating}>{rating} <span className={style.rating_container__rating__count}>({serie.vote_count})</span></p>
            </div>
            <p className={style.description}>{serie.overview}</p>
            <Date date={serie.first_air_date} />
        </div>
    )
};
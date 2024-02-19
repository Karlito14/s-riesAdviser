import style from './style.module.css';

export const SeriesDetails = ({ serie }) => {
    return (
        <div>
            <h2 className={style.title}>{serie.name}</h2>
            <span className={style.rating}>{serie.vote_average / 2} ({serie.vote_count})</span>
            <p className={style.description}>{serie.overview}</p>
            <small className={style.date}>{serie.first_air_date}</small>
        </div>
    )
};
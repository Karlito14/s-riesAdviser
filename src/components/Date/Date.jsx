import style from './style.module.css';

export const Date = ({date}) => {
    const arrayDate = date.split('-');

    const frenchDate = arrayDate.reverse().join('-')

    return (
        <small className={style.date}>Release date : {frenchDate}</small>
    )
}
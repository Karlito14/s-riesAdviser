import style from './style.module.scss';

export const Date = ({date}) => {
    const arrayDate = date.split('-');

    const frenchDate = arrayDate.reverse().join('-')

    return (
        <small className={style.date}>Release date : {frenchDate}</small>
    )
}
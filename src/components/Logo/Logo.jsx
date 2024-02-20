import style from './style.module.scss';

export const Logo = ({image, title, subtitle}) => {
    return (
        <>
            <div className={style.container}>
                <img alt={`Logo ${title}`} src={image} className={style.container__img} />
                <h1 className={style.container__title}>{title}</h1>
            </div>
            <span className={style.subtitle}>{subtitle}</span>
        </>
    )
};
import './global.css';
import style from './style.module.css'
export const App = () => {
    return (
        <div className={style.main}>
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
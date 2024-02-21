import style from './style.module.scss';
import { Search as SearchIcon } from 'react-bootstrap-icons';

export const SeachBar = ({onSubmit}) => {

    function submit (event) {
        if(event.key === "Enter") {
            const value = event.target.value.trim();

            if(value !== '') {
                onSubmit(value);
            }
        }
    }

    return (
        <form className={style.container}>
            <input 
                className={style.input} 
                type='text' 
                placeholder='Search a TV show' 
                onKeyDown={(event) => submit(event)}
            />
            <SearchIcon className={style.icon} size={27} />
        </form>
    )
}
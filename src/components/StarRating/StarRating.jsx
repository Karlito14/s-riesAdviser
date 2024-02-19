import { StarFill, StarHalf, Star as StarEmpty} from 'react-bootstrap-icons';

export const StarRating = ({rating}) => {
    const arrayStars = [];

    const startFill = Math.trunc(rating);

    const starHalf = rating - startFill >= 0.5;

    const starEmpty = 5 - startFill - (starHalf ? 1 : 0);

    for(let i = 0; i < startFill; i++) {
        arrayStars.push(<StarFill />);
    }

    if(starHalf) {
        arrayStars.push(<StarHalf />);
    }

    for(let i = 0; i < starEmpty; i++) {
        arrayStars.push(<StarEmpty />);
    }
    
    return (
        <div>
            {arrayStars.map((star, key) => {
                return (
                    <span key={`${key}-${star}`}>{star}</span>
                )
            })}
        </div>
    )

};
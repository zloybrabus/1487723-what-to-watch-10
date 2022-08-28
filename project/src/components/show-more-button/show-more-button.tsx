import { incrementCounter } from '../../store/films-slice/film-slice';
import { useAppDisptach } from '../../hooks';
import { COUNT_RENDER_FILMS } from './../../const';

function ShowMoreButton () {
  const dispatch = useAppDisptach();

  const handleClick = () => {
    dispatch(incrementCounter(COUNT_RENDER_FILMS));
  };
  return (
    <div className="catalog__more">
      <button onClick={handleClick} className='catalog__button' type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;

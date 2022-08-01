import { incrementCounter } from '../../action';
import { useAppDisptach } from '../../hooks';
import COUNT_RENDER_FILMS from '../../reducer';

function ShowMoreButton () {
  const dispatch = useAppDisptach();

  const clickButtonHandler = () => {
    dispatch(incrementCounter(COUNT_RENDER_FILMS));
  };
  return (
    <div className="catalog__more">
      <button onClick={clickButtonHandler} className='catalog__button' type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;

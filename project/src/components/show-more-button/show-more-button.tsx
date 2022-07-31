import { getMoreFilms } from '../../action';
import { useAppDisptach } from '../../hooks';

function ShowMoreButton () {
  const dispatch = useAppDisptach();

  const clickButtonHandler = () => {
    dispatch(getMoreFilms());
  };
  return (
    <div className="catalog__more">
      <button onClick={clickButtonHandler} className='catalog__button' type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;

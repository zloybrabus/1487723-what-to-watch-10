import { Link } from 'react-router-dom';
import { changeGenreAction, resetCounter } from '../../store/action';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { genres } from '../../mocks/genres';
import cn from 'classnames';

function GenersList() {
  const dispatch = useAppDisptach();
  const activeGenre = useAppSelector((state) => state.genre);

  const clickHandler = (genre: string) => {
    dispatch(changeGenreAction(genre));
    dispatch(resetCounter());
  };

  return (
    <ul className='catalog__genres-list'>
      {genres.map((genre) => (
        <li
          key={genre}
          onClick={() => clickHandler(genre)}
          data-genre={genre}
          className={cn(
            activeGenre === genre
              ? 'catalog__genres-item catalog__genres-item--active'
              : 'catalog__genres-item'
          )}
        >
          <Link to='/' className='catalog__genres-link'>
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GenersList;

import { Link } from 'react-router-dom';
import { useAppDisptach, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { changeGenreAction, resetCounter } from '../../store/films-slice/film-slice';
import { selectActiveGenre } from '../../store/films-slice/selectors';
import { CardFilm } from '../../types/card-film';


type GenresListProps = {
  films: CardFilm[],
};

function GenersList({films}: GenresListProps) {
  const dispatch = useAppDisptach();
  const activeGenre = useAppSelector(selectActiveGenre);

  const genres = ['All geners', ...new Set(films.map((item) => item.genre))];

  const handleClick = (genre: string) => {
    dispatch(changeGenreAction(genre));
    dispatch(resetCounter());
  };

  return (
    <ul className='catalog__genres-list'>
      {genres.map((genre) => (
        <li
          key={genre}
          onClick={() => handleClick(genre)}
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

import GenersList from '../geners-list/geners-list';
import FilmList from '../film-list/film-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';
import { CardFilms } from '../../types/card-film';
import { initialState } from '../../reducer';

function Catalog() {
  const activeGenre = useAppSelector((state) => state.genre);

  const films: CardFilms = useAppSelector((state) => state.films);

  function filteredFilms(films: CardFilms) {
    if (activeGenre === 'All genres') {
      return films;
    } else {
      return films.filter((film) => film.genre === activeGenre);
    }
  }

  function getMoreFilms () {
    const newRenderedMovieCount = Math.max(initialState.countRenderFilms, initialState.countRenderFilms + initialState.countRenderFilms);
    initialState.filmsForRender = initialState.filmsFilteredGenre.slice(0, newRenderedMovieCount);
    initialState.countRenderFilms = newRenderedMovieCount;
    const filmsCount = initialState.filmsFilteredGenre.length;
    if (filmsCount > initialState.countRenderFilms) {
      initialState.isRenderShowMoreButton = true;
    } else {
      initialState.isRenderShowMoreButton = false;
    }
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenersList />

      <FilmList films={filteredFilms(films)} />

      {
        filteredFilms(films).length >= initialState.countRenderFilms &&
        <ShowMoreButton />
      }
    </section>
  );
}

export default Catalog;

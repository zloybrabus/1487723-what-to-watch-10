import GenersList from '../geners-list/geners-list';
import FilmList from '../film-list/film-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';
import { CardFilms } from '../../types/card-film';

function filterFilms(films: CardFilms, activeGenre: string) {
  if (activeGenre === 'All genres') {
    return films;
  } else {
    return films.filter((film) => film.genre === activeGenre);
  }
}

function Catalog() {
  const activeGenre = useAppSelector((state) => state.genre);
  const shownFilmsCount = useAppSelector((state) => state.countRenderFilms);
  const films: CardFilms = useAppSelector((state) => state.films);

  const filtredFilms = filterFilms(films, activeGenre);
  const filmsForRender = filtredFilms.slice(0, shownFilmsCount);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenersList />

      <FilmList films={filmsForRender} />

      {
        filmsForRender.length >= shownFilmsCount && (
          <ShowMoreButton />
        )
      }
    </section>
  );
}

export default Catalog;

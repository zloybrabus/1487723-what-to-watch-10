import React from 'react';
import GenersList from '../geners-list/geners-list';
import FilmList from '../film-list/film-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';
import { CardFilms } from '../../types/card-film';
import {selectActiveGenre, selectFilms, selectcountRenderFilms} from '../../store/films-slice/selectors';

function filterFilms(films: CardFilms, activeGenre: string) {
  if (activeGenre === 'All genres') {
    return films;
  } else {
    return films.filter((film) => film.genre === activeGenre);
  }
}

function Catalog() {
  const activeGenre = useAppSelector(selectActiveGenre);
  const shownFilmsCount = useAppSelector(selectcountRenderFilms);
  const films: CardFilms = useAppSelector(selectFilms);

  const filtredFilms = filterFilms(films, activeGenre);
  const filmsForRender = filtredFilms.slice(0, shownFilmsCount);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenersList films={films} />

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

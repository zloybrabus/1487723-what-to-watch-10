import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useParams } from 'react-router-dom';
import CardTabs from '../../components/card-tabs/card-tabs';
import FilmList from '../../components/film-list/film-list';
import { useAppSelector, useAppDisptach } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import { fetchFilm, fetchCommentsFilm, fetchSimilar } from '../../store/api-action';
import { selectFilm, selectIsLoadingFilms, selectSimilarFilms } from '../../store/films-slice/selectors';
import FilmControls from '../../components/film-controls/film-controls';

function Film(): JSX.Element {
  const dispatch = useAppDisptach();
  const { id } = useParams();
  const isFilmLoading = useAppSelector(selectIsLoadingFilms);
  const film = useAppSelector(selectFilm);
  const similarFilms = useAppSelector(selectSimilarFilms);

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchFilm(+id));
    dispatch(fetchSimilar(id));
    dispatch(fetchCommentsFilm(+id));
  },[dispatch, id]);

  if (isFilmLoading || !film) {
    return <LoadingScreen />;
  }
  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film.backgroundImage}
              alt={film.name}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <FilmControls film={film} />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>

            <CardTabs card={film} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms.slice(0, 4)} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Film;

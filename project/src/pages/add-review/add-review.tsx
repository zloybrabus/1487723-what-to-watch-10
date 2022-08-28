import React, { useEffect } from 'react';
import Logo from '../../components/logo/logo';
import {useParams, Link, generatePath} from 'react-router-dom';
import FormReview from '../../components/form-review/form-review';
import { AppRoute } from '../../const';
import { fetchFilm } from '../../store/api-action';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector, useAppDisptach } from '../../hooks';
import { selectFilm, selectIsLoadingFilms } from '../../store/films-slice/selectors';

function AddReview(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDisptach();
  const isFilmLoading = useAppSelector(selectIsLoadingFilms);
  const film = useAppSelector(selectFilm);

  useEffect(() => {
    if (!id || film) {
      return;
    }

    dispatch(fetchFilm(+id));
  },[dispatch, film, id]);


  if (isFilmLoading || !film) {
    return <LoadingScreen />;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film.backgroundImage}
            alt={film.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={generatePath(AppRoute.Film, { id: `${film.id}`} )} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={generatePath(AppRoute.AddReview, { id: `${film.id}` })}>Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="/img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <FormReview id={id || '0'} />
    </section>
  );
}

export default AddReview;

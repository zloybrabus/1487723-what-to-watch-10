import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { CardFilms } from '../../types/card-film';
import { useParams, Link, Navigate, generatePath } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import CardTabs from '../../components/card-tabs/card-tabs';
import FilmList from '../../components/film-list/film-list';

type CardFilmProps= {
  cards: CardFilms;
}

function Film({ cards }: CardFilmProps): JSX.Element {
  const { id } = useParams();
  const {authorizationStatus} = useAppSelector((state) => state);
  const card = cards.find((cardInFilm) => id && cardInFilm.id === Number.parseInt(id, 10));
  if (!card) {
    return <Navigate to="/" />;
  }
  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={card.backgroundImage}
              alt={card.name}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{card.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{card.genre}</span>
                <span className="film-card__year">{card.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{cards.length}</span>
                </button>
                {(authorizationStatus === AuthorizationStatus.Auth) && <Link to={generatePath(AppRoute.AddReview, { id: `${card.id}` })} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={card.posterImage}
                alt={card.name}
                width="218"
                height="327"
              />
            </div>

            <CardTabs card={card} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={cards} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Film;

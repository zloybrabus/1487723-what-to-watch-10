import React from 'react';
import { selectAuthorizationStatus } from '../../store/auth-slice/selectors';
import { useAppSelector, useAppDisptach } from '../../hooks';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { selectFavorites } from '../../store/films-slice/selectors';
import { changeToFavoriteAction } from '../../store/api-action';
import { ChangeFavoritePayload } from '../../types/change-favorite-payload';
import { CardFilm } from '../../types/card-film';
import { redirectToRoute } from '../../store/action';

type FilmControlsProps = {
  film: CardFilm,
}

function FilmControls({ film }: FilmControlsProps) {

  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const favorieFilms = useAppSelector(selectFavorites);
  const dispatch = useAppDisptach();

  const handleChangeFavorite = () => {
    const data: ChangeFavoritePayload = {
      id: film.id,
      status: Number(!film.isFavorite),
    };
    dispatch(changeToFavoriteAction(data));
  };

  const handlePlayButtonClick = () => {
    dispatch(redirectToRoute(`player/${film.id}`));
  };

  return (
    <div className="film-card__buttons">
      <button
        onClick={handlePlayButtonClick}
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
        onClick={handleChangeFavorite}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          {
            film.isFavorite
              ? <use xlinkHref="#in-list" />
              : <use xlinkHref="#add" />
          }
        </svg>
        <span>My list</span>
        {isAuth && (
          <span className="film-card__count">{favorieFilms.length}</span>
        )}
      </button>

      {isAuth && film.id && (
        <Link
          to={generatePath(AppRoute.AddReview, { id: `${film.id}` })}
          className="btn film-card__button"
        >
          Add review
        </Link>
      )}
    </div>
  );
}

export default FilmControls;

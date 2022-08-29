import React, { useEffect } from 'react';
import { selectAuthorizationStatus } from '../../store/auth-slice/selectors';
import { useAppSelector, useAppDisptach } from '../../hooks';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { selectFavorites } from '../../store/films-slice/selectors';
import { changeToFavoriteAction, fetchFavoritesAction } from '../../store/api-action';
import { selectFilmId, selectFilmStatus } from '../../store/films-slice/selectors';
import { IsFavorite } from '../../types/is-favorite'

function FilmControls() {

  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const favorieFilms = useAppSelector(selectFavorites);
  const filmId = useAppSelector(selectFilmId);
  const filmStatus = useAppSelector(selectFilmStatus);
  const dispatch = useAppDisptach();

  const handleChangeFavorite = () => {
    const data: IsFavorite = {
      id: filmId,
      status: filmStatus,
    };
    dispatch(changeToFavoriteAction(data));
  };

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [filmStatus, dispatch]);

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
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
          filmStatus
            ? <use xlinkHref="#in-list" />
            : <use xlinkHref="#add" />
        }
        </svg>
        <span>My list</span>
        {isAuth && (
          <span className="film-card__count">{favorieFilms.length}</span>
        )}
      </button>

      {isAuth && filmId && (
        <Link
          to={generatePath(AppRoute.AddReview, { id: `${filmId}` })}
          className="btn film-card__button"
        >
          Add review
        </Link>
      )}
    </div>
  );
}

export default FilmControls;

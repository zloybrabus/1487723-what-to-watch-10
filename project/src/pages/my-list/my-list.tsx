import React, { useEffect } from 'react';
import { useAppSelector, useAppDisptach } from '../../hooks/index';
import { selectFavorites } from '../../store/films-slice/selectors';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { fetchFavoritesAction } from '../../store/api-action';


function MyList(): JSX.Element {

  const dispatch = useAppDisptach();
  const favorites = useAppSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favorites.length}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={favorites}/>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;

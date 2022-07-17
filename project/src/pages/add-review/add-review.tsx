import React from 'react';
import Logo from '../../components/logo/logo';
import { CardFilms } from '../../types/card-film';
import {useParams, Link} from 'react-router-dom';
import FormReview from '../../components/form-review/form-review';

type AddReviewProps = {
  cards: CardFilms;
}

function AddReview({cards}: AddReviewProps): JSX.Element {
  const params = useParams();
  const id = `${(params.id ? params.id.slice(1) : '0')}`;
  const card = cards.find((item) => item.id === Number.parseInt(id, 10)) || cards[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={card.img}
            alt={card.title}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/:${card.id}`} className="breadcrumbs__link">{card.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/:${card.id}/review`}>Add review</Link>
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
            src={card.img}
            alt={card.title}
            width="218"
            height="327"
          />
        </div>
      </div>

      <FormReview />
    </section>
  );
}

export default AddReview;

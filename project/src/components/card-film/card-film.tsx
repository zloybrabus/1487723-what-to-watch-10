import { CardFilm as CardFilmType } from '../../types/card-film';
import { Link } from 'react-router-dom';

type CardFilmProps= {
  card: CardFilmType
}

function CardFilm({ card }: CardFilmProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={card.img} alt={card.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/:${card.id}`}>{card.title}</Link>
      </h3>
    </article>
  );
}

export default CardFilm;

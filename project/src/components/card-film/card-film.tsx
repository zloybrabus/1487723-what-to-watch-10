import { CardFilm as CardFilmType } from '../../types/card-film';

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
        <a className="small-film-card__link" href="film-page.html">
          {card.title}
        </a>
      </h3>
    </article>
  );
}

export default CardFilm;

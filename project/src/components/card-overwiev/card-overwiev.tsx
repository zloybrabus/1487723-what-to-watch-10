import { CardFilm as CardFilmType } from '../../types/card-film';

type FilmOverwievProps = {
  card: CardFilmType;
};

function CardOverview({ card }: FilmOverwievProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{card.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{card.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{card.description}</p>

        <p className="film-card__director">
          <strong>Director: {card.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {card.starring.map((item) => <span key={item}>{item} </span>)}
          </span>
        </p>
      </div>
    </>
  );
}


export default CardOverview;

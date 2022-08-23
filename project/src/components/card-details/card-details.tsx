import { CardFilm as CardFilmType } from '../../types/card-film';
import { TimeMin } from '../../const';

type CardFilmProps = {
    card: CardFilmType;
}

function CardDetails({ card }: CardFilmProps): JSX.Element {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name huy">Director</strong>
          <span className="film-card__details-value">{card.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starringqsd</strong>
          {card.starring.map((item,i)=>(<span className="film-card__details-value" key={item}>{`${item}${i === card.starring.length - 1 ? '' : ',' }`}</span>))}
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{TimeMin(card.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{card.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{card.released}</span>
        </p>
      </div>
    </div>
  );
}

export default CardDetails;

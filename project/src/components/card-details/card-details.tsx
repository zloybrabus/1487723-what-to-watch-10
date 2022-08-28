import { CardFilm as CardFilmType } from '../../types/card-film';

export const formatFilmDuration = (mins: number): string => {
  const hour = Math.trunc(mins / 60);
  const minute = mins % 60;
  return `${hour}h ${minute}m`;
};

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
          <strong className="film-card__details-name">Starring</strong>
          {card.starring.map((item,i)=>(<span className="film-card__details-value" key={item}>{`${item}${i === card.starring.length - 1 ? '' : ',' }`}</span>))}
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{formatFilmDuration(card.runTime)}</span>
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

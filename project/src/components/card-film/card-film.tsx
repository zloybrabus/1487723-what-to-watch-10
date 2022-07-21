import { useState } from 'react';
import { CardFilm as CardFilmType } from '../../types/card-film';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';

type CardFilmProps= {
  card: CardFilmType,
  filmCardTarget: number | undefined,
  setTarget: React.Dispatch<React.SetStateAction<number | undefined>>
}

function CardFilm({ card, setTarget, filmCardTarget }: CardFilmProps) {
  const [isFosued, setIsFocused] = useState(false);

  const handleMouseEnter = () => {
    setTarget(card.id);
    setIsFocused(!isFosued);
  };

  const handleMouseLeave = () => {
    setTarget(undefined);
    setIsFocused(!isFosued);
  };

  return (
    <article className="small-film-card catalog__films-card" id={`${card.id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image">
        {isFosued ? <VideoPlayer img={card.img} video={card.videoLink}></VideoPlayer> : <img src={card.img} alt={card.title} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, { id: `${card.id}` })}>{card.title}</Link>
      </h3>
    </article>
  );
}

export default CardFilm;

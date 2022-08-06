import { useState } from 'react';
import { CardFilm as CardFilmType } from '../../types/card-film';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';

type CardFilmProps= {
  card: CardFilmType,
}

function CardFilm({ card }: CardFilmProps) {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(!isActive);
  };

  const handleMouseLeave = () => {
    setIsActive(!isActive);
  };

  return (
    <article className="small-film-card catalog__films-card" id={`${card.id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image">
        {isActive
          ? <VideoPlayer img={card.previewImage} video={card.videoLink} />
          : <img src={card.previewImage} alt={card.name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, { id: `${card.id}` })}>{card.name}</Link>
      </h3>
    </article>
  );
}

export default CardFilm;

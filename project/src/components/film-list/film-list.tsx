import { CardFilms } from '../../types/card-film';
import { useAppSelector } from '../../hooks';
import CardFilm from '../../components/card-film/card-film';
import ShowMoreButton from '../show-more-button/show-more-button';
import {useState} from 'react';

type CardFilmProps= {
    cards: CardFilms;
}

function FilmList({}: CardFilmProps) {
  const cards = useAppSelector((state) => state.filmsForRender);
  const [FilmCardTarget, setFilmCardTarget] = useState<number | undefined>(undefined);

  return (
    <>
      <div className="catalog__films-list">
        {cards.map((card) => (
          <CardFilm card={card} key={card.id} setTarget={setFilmCardTarget} filmCardTarget={FilmCardTarget} />
        ))}
      </div>
      <ShowMoreButton />
    </>

  );
}

export default FilmList;

import { CardFilms } from '../../types/card-film';
import CardFilm from '../../components/card-film/card-film';
import {useState} from 'react';

type CardFilmProps= {
    cards: CardFilms;
}

function FilmList({ cards }: CardFilmProps) {

  const [FilmCardTarget, setFilmCardTarget] = useState<number | undefined>(undefined);

  return (
    <div className="catalog__films-list">
      {cards.map((card) => (
        <CardFilm card={card} key={card.id} setTarget={setFilmCardTarget} filmCardTarget={FilmCardTarget} />
      ))}
    </div>
  );
}

export default FilmList;

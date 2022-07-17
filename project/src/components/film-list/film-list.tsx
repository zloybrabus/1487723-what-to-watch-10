import { CardFilms } from '../../types/card-film';
import CardFilm from '../../components/card-film/card-film';

type CardFilmProps= {
    cards: CardFilms;
}

function FilmList({ cards }: CardFilmProps) {
  return (
    <div className="catalog__films-list">
      {cards.map((card) => (
        <CardFilm card={card} key={card.title} />
      ))}
    </div>
  );
}

export default FilmList;

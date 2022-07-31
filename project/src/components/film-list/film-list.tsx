import CardFilm from '../../components/card-film/card-film';
import {CardFilms} from '../../types/card-film';

type CardFilmProps= {
  films: CardFilms,
}

function FilmList({ films }: CardFilmProps) {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <CardFilm card={film} key={film.id} />
      ))}
    </div>
  );
}

export default FilmList;

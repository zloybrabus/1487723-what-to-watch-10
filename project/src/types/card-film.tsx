export type CardFilm = {
    id: number;
    title: string;
    img: string;
    genre: string,
    director: string,
    starring: string[],
    rating: number,
    duration: number,
    scoresCount: number,
    released: number,
    isFavorite: boolean,
    videoLink: string,
    description: string,
  };

export type CardFilms = CardFilm[];

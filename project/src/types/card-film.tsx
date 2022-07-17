export type CardFilm = {
    id: number;
    title: string;
    img: string;
    released: number,
    isFavorite: boolean,
    videoLink: string,
    description: string,
  };

export type CardFilms = CardFilm[];

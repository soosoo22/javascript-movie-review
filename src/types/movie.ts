export interface MovieType {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
<<<<<<< HEAD
}

export type MovieListType = MovieType[];
=======
  genre_ids: number[];
  overview: string;
}

export type MovieListType = MovieType[];

export interface MovieScore {
  movie: MovieType;
  score: string;
}
>>>>>>> step2

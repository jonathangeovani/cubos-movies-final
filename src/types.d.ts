export interface MoviesData {
  page: number;
  results: [MovieData];
  total_pages: number;
  total_results: number;
}

export interface MovieData {
  id: number;
  title: string;
  genre_ids: [number];
  poster_path: string;
  vote_average: number;
}

export interface MovieDetailsData {
  backdrop_path: string;
  genres: [{ id: number; name: string }];
  homepage: string;
  original_title: string;
  original_language: string;
  overview: string;
  poster_path: string;
  production_companies: [{}];
  release_date: string;
  spoken_languages: [{ english_name: string; iso_639_1: string; name: string }];
  budget: number;
  revenue: number;
  runtime: number;
  vote_average: number;
  status: string;
  title: string;
  tagline: string;
}

export interface MovieTrailerData {
  id: number;
  results: [
    {
      key: string;
      site: string;
      official: boolean;
      type: string;
    }
  ];
}

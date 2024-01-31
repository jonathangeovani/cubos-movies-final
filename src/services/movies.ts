import type { MovieDetailsData, MovieTrailerData, MoviesData } from "@/types";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_API_KEY;

const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${API_KEY}` },
};

export const getMovies = async (
  query = "",
  page = "1",
  genres = ""
): Promise<MoviesData> => {
  let finalUrl;

  if (query) {
    finalUrl = `${API_URL}/search/movie?query=${query}&include_adult=false&language=pt-BR&page=${page}&api_key=${API_KEY}`;
  } else {
    finalUrl = `${API_URL}/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&with_genres=${genres}&api_key=${API_KEY}`;
  }

  return await fetch(finalUrl).then((res) => res.json());
};

export const getMovieDetails = async (
  movieId: string
): Promise<MovieDetailsData> => {
  return await fetch(
    `${API_URL}movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
  ).then((res) => res.json());
};

export const getMovieTrailer = async (
  movieId: string
): Promise<MovieTrailerData> => {
  return await fetch(
    `${API_URL}movie/${movieId}/videos?language=pt-BR&api_key=${API_KEY}`
  ).then((res) => res.json());
};

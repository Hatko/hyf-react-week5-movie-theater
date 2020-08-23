import movies from "./movies.json";

export const getMovies = () => {
  return movies;
};

export const movieByName = (name) => {
  return movies.find((movie) => {
    return movie.name === name;
  });
};

import React from "react";
import { useParams } from "react-router-dom";
import { movieByName } from "./../data/getMovies";

export const Movie = () => {
  const { name } = useParams();
  const movie = movieByName(name) || {};

  return (
    <>
      <div>{movie.name}</div>
      <div>{movie.director}</div>
      <div>{movie.year}</div>
    </>
  );
};

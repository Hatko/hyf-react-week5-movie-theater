import React, { useState, useRef, useEffect } from "react";
import { getMovies } from "./../data/getMovies";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { parse } from "query-string";

class MovieTitle extends React.Component {
  state = {
    color: "red",
  };

  changeColor = (color) => {
    this.setState({ color });
  };

  render() {
    const { movie, path } = this.props;
    return (
      <>
        <Link to={`${path}/${movie.name}`}>{movie.name}</Link>
        {!!movie.rating && (
          <div
            style={{
              width: 100,
              height: 20,
              backgroundColor: this.state.color,
            }}
          >
            {movie.rating}
          </div>
        )}
      </>
    );
  }
}

export const Movies = () => {
  const { path } = useRouteMatch();
  const inputRef = useRef(null);
  const movieTitleRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const movies = getMovies();
  const { search } = useLocation();
  const genre = parse(search).genre;

  const [colorRed, setColorRed] = useState(true);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [genre]);

  return (
    <div>
      <input
        placeholder={"search movie"}
        ref={inputRef}
        onChange={({ target: { value } }) => setSearchTerm(value)}
      />
      {movies
        .filter((movie) => {
          return !!movie.categories.find(
            (category) => category.toLowerCase() === genre
          );
        })
        .filter((movie) => {
          return movie.name.toLowerCase().includes(searchTerm);
        })
        .map((movie, idx) => {
          return (
            <li style={{ listStyleType: "none" }} key={`${movie.name}-${idx}`}>
              <MovieTitle movie={movie} ref={movieTitleRef} path={path} />
            </li>
          );
        })}
      <button
        onClick={() => {
          if (movieTitleRef.current) {
            setColorRed(!colorRed);
            if (colorRed) {
              movieTitleRef.current.changeColor("blue");
            } else {
              movieTitleRef.current.changeColor("red");
            }
          }
        }}
      >
        Change color
      </button>
    </div>
  );
};

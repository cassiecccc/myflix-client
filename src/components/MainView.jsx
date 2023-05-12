import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { MovieView } from "./MovieView";

export function MainView() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://myflix-cassie.herokuapp.com/movies")
      .then((res) => res.json())
      .then((movies) => {
        const moviesFromAPI = movies.map((movie) => {
          return {
            id: movie._id,
            title: movie.Title,
            director: movie.Director.Name,
            image: movie.ImagePath,
          };
        });
        setMovies(moviesFromAPI);
      });
  }, []);

  const [selectedMovie, setSelectedMovie] = useState(null);
  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  console.log(movies);

  return (
    <>
      <div>
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newSelectMovie) =>
                setSelectedMovie(newSelectMovie)
              }
            />
          );
        })}
      </div>
    </>
  );
}

import React from "react";
import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { MovieView } from "./MovieView";

export function MainView() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Se7en",
      director: "David Fincher",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    },
    {
      id: 2,
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: 3,
      title: "The Social Network",
      director: "David Fincher",
      image:
        "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

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

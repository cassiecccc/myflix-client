import React from "react";
import { useState } from "react";

export function MainView() {
  const [movies, setMovies] = useState([
    { id: 1, title: "se7en" },
    { id: 1, title: "Pulp Fiction" },
    { id: 1, title: "The Social Network" },
  ]);

  return (
    <>
      <div>
        {movies.map((movie) => {
          return <div>{movie.title}</div>;
        })}
      </div>
    </>
  );
}

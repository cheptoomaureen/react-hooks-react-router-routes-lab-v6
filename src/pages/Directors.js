
import React from "react";
import NavBar from "../components/NavBar";

const Directors = () => {
  const directors = [
    { id: 1, name: "Director 1", movies: ["Movie 1"] },
    { id: 2, name: "Director 2", movies: ["Movie 2"] },
    { id: 3, name: "Director 3", movies: ["Movie 3"] },
    
  ];

  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Directors;

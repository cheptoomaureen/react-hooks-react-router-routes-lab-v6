// Actors.js
import React from "react";
import NavBar from "../components/NavBar";

const Actors = () => {
  
  const actors = [
    { id: 1, name: "Actor 1", movies: ["Movie 1"] },
    { id: 2, name: "Actor 2", movies: ["Movie 2"] },
    { id: 3, name: "Actor 3", movies: ["Movie 3"] },
    { id: 4, name: "Actor 4", movies: ["Movie 4"] },


    
  ];

  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Actors;


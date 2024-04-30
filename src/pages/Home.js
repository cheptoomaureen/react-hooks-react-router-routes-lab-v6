import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [Movie, setMovies] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/movies")
      .then(r => r.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);
  
  const userList =  Movie.map(user =>{
    return <MovieCard key={user.id} user={user}/>
  });

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Home!</h1>
        {userList}
      </main>
    </>
  );
};

export default Home;
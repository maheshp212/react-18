import { useState, useEffect } from "react";
const Swapi = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

//   useEffect(()=>{
//     fetchMovies();
//   },[])

  const fetchMovies = () => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/films")
      .then((resp) => {
        //reps is a json object
        // resp.json() -> converting json object to java script object
        return resp.json();
      })
      .then((data) => {
        // data is a javascript object andwe are setting into movies variable
        setMovies(data.results);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  };
  return (
    <div>
      <h1> Swapi</h1>
      <div>
        <button onClick={fetchMovies}> Fetch Movies</button>
      </div>
      <table border="1" width="1000">
        <tbody>
          <tr>
            <th>Movie Name</th>
            <th>Movie Desc</th>
            <th>Release Date</th>
          </tr>
          {movies.length ?
            movies.map((movie, index) => {
              return (
                <tr key={index}>
                  <td> {movie.title}</td>
                  <td> {movie.opening_crawl}</td>
                  <td> {movie.release_date}</td>
                </tr>
              );
            }): <tr><td colSpan={3}> {isLoading ? 'Loading ...' : 'No Movies loaded, please click on fetch movies'}</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default Swapi;

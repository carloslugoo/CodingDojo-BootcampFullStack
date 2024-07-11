import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/main.css';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get('http://localhost:8000/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="title-container">
        <h1>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/012/657/549/small/illustration-negative-film-reel-roll-tapes-for-movie-cinema-video-logo-vector.jpg" alt="Logo" /> Películas!
        </h1>
        <Link to={`/add`}><button className="addButton">Agregar Película</button></Link>
      </div>
      <table className="table-container">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>
              <Link to={`/${movie._id}/review`}><button className="reviewButton">Escribir Review</button></Link>
                <Link to={`/${movie._id}`}><button className="reviewButton readButton">Leer Reviews</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;

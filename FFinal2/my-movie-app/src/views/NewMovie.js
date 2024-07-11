import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'; 
import '../styles/new.css';
import { Link } from 'react-router-dom';

function NewMovieForm() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [username, setUsername] = useState('');
  const [reviewRating, setReviewRating] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Crear nueva película
      const newMovieResponse = await axios.post('http://localhost:8000/movies/add', { title, rating });
      const newMovieId = newMovieResponse.data._id;

      // Crear nueva reseña para la película
      await axios.post(`http://localhost:8000/movies/${newMovieId}/reviews`, { username, rating: reviewRating, comment });

      navigate('/');
    } catch (error) {
      console.error('Error adding new movie and review:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Agregar nueva película y reseña!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título de la película:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Tu nombre:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reviewRating">Rating de la reseña:</label>
          <input
            type="number"
            id="reviewRating"
            value={reviewRating}
            onChange={(e) => setReviewRating(e.target.value)}
            min="1"
            max="10"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comentario:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submitButton">Agregar</button>
        <Link to={`/`}><button className="cancelButton">Cancelar</button></Link>
      </form>
    </div>
  );
}

export default NewMovieForm;

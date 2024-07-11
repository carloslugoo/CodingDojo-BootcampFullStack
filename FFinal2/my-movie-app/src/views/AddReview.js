import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; // Importa useParams de react-router-dom
import '../styles/new.css';
import { useNavigate } from 'react-router-dom'; 

function ReviewForm() {
  const { id } = useParams(); // Obtén el ID de la película de los parámetros de la URL
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await axios.post(`http://localhost:8000/movies/${id}/reviews`, { username, rating, comment });
        navigate(`/${id}`); 
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Escribir reseña</h1>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
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
        <button type="submit" className="submitButton">Enviar Reseña</button>
        <Link to={`/`}><button className="cancelButton">Cancelar</button></Link>
      </form>
    </div>
  );
}

export default ReviewForm;

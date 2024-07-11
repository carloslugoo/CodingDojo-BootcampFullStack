import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'; 
import '../styles/review.css';

function MovieReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await axios.get(`http://localhost:8000/movies/${id}`);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    }

    fetchReviews();
}, [id]); 

const navigate = useNavigate();

const handleDeleteMovie = async () => {
  try {
    await axios.delete(`http://localhost:8000/movies/${id}`); 
    navigate('/'); 
  } catch (error) {
    console.error('Error deleting movie:', error);
  }
};

return (
    <div className="reviews-container">
        <h1>Reseñas de la Película</h1>
        <table className="table-container">
        <thead>
            <tr>
                <th>Reviewer</th>
                <th>Rating</th>
                <th>Comentario</th>
            </tr>
        </thead>
        <tbody>
            {reviews.map(review => (
            <tr key={review._id}>
                <td>{review.username}</td>
                <td>{review.rating}</td>
                <td>{review.comment}</td>
            </tr>
            ))}
        </tbody>
        </table>
        <br></br>
        <Link to="/"><button className="submitButton">Volver</button></Link>
        <Link to="/"><button onClick={handleDeleteMovie} className="cancelButton">Borrar película</button></Link>
        </div>
    );
}
export default MovieReviews;

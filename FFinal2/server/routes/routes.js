const express = require('express');
const router = express.Router();
const { Movie, Review } = require('../models/models');

// Ruta para obtener todas las películas
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las películas" });
    }
});

// Ruta para crear una nueva película
router.post('/add', async (req, res) => {
    const { title, rating } = req.body;
    try {
        const newMovie = new Movie({ title, rating });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear la película" });
    }
});

// Ruta para crear una nueva reseña para una película específica
router.post('/:id/reviews', async (req, res) => {
    const movieId = req.params.id;
    const { username, rating, comment } = req.body;
    try {
        // Verificar si la película existe
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Película no encontrada" });
        }
        // Crear una nueva reseña
        const newReview = new Review({ username, movieId, rating, comment });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al agregar la reseña" });
    }
});


// Ruta para obtener el detalle de una película por su ID y sus reseñas
router.get('/:id', async (req, res) => {
    const movieId = req.params.id;
    try {
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Película no encontrada" });
        }
        // Buscar reseñas asociadas a esta película
        const reviews = await Review.find({ movieId });
        res.json({ movie, reviews });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener la película y sus reseñas" });
    }
});

// Ruta para eliminar una película por su ID
router.delete('/:id', async (req, res) => {
    const movieId = req.params.id;
    try {
      // Buscar la película por su ID y eliminarla
      const deletedMovie = await Movie.findByIdAndDelete(movieId);
      if (!deletedMovie) {
        return res.status(404).json({ message: "Película no encontrada" });
      }
      res.json({ message: "Película eliminada correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al eliminar la película" });
    }
  });
  

module.exports = router;

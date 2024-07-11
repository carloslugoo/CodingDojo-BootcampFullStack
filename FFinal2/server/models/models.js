const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// esquema para la película
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    }
});

// esquema para la reseña de usuario
const reviewSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie', 
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});


const Movie = mongoose.model('Movie', movieSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
    Movie,
    Review
};

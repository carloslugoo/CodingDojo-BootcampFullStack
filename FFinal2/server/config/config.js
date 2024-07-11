const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/movies", {})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
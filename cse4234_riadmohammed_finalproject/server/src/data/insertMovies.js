const data = require("./movies.json");

const MoviesSchema = require("../models/movies");

const InsertMovies = () => {
	return MoviesSchema.insertMany(data)
		.then(() => {
			console.log("Movies was successfully inserted");
		})
		.catch((err) => {
			console.log("Failed to insert movies into the database", err.message);
		})
};

module.exports = InsertMovies();





const router = require("express").Router();
const MoviesSchema = require("../models/movies");

router.get("/genres", async (req, res) => {
	const movies = JSON.parse(JSON.stringify(await MoviesSchema.find({}, "-_id -__v")));
	
	MoviesSchema.find({}, "info.genres -_id", (err, result) => {
		if (err) {
			return res.json({message: "error, could not fetch movies"});
		}
		else {
			const listOfGenres = [];
					
			// Extracts all the genres
			result.map(movie => {
				listOfGenres.push(movie.info.genres);
			});
					
			// returns a list of genres after flattening the nested list and removing duplicates with a set
			const extractedGenres = [...new Set(listOfGenres.flat(1))];
			
			const categories = [];
			
			extractedGenres.map(genre => {
				categories.push(movies.filter(movie => {
					return movie.info.genres.includes(genre);
				}))
			})
			
			const sorted = categories.map(genre => {
				return genre.sort((a,b) => (b.info.rating - a.info.rating)).splice(0, 10);
			})
			
			return res.json({movie: sorted, genre: extractedGenres});
		}
	})
});

module.exports = router;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const movieRouter = require("./api/movies");
const registerRouter = require("./api/register");
const path = require("path");

// middleware used
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json({limit: "25mb"}));
app.use(cors());
app.use("/movies", movieRouter);
app.use("/register", registerRouter);

app.get('*', function (req, res) {
	res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});


// connect to the database
const port = 3000;
mongoose.connect("mongodb://127.0.0.1:27017/movies-riadmohammed-4844)")
	//.then(() => {
	//	require("./data/insertMovies");
	//})
	.then(() => {
		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	})
	.catch(err => {
		console.error("Connection error", err.message);
	});
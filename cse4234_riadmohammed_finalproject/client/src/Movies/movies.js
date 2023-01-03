import { useState, useEffect, useContext } from "react";
import { FavoriteContext } from "../favorite/favorite";
import axios from "axios";

import MovieCard from "../MovieCard/movieCard";
import "./movies.css";

export default function Movies () {
	const {favorite, contain} = useContext(FavoriteContext);
	const [hasFavorite, setHasFavorite] = contain;
	const [list, setList] = favorite;
	const [movies, setMovies] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	
	async function fetchMovies() {
		try {
			const res = await axios.get("http://localhost:3000/movies/genres");
			setMovies(res.data);
			setIsLoaded(true);
		} catch (err) {
			console.log(err);
		}
	}
	
	useEffect( () => {
		fetchMovies()
	}, [])
	
	if (!isLoaded){
		return (<div>Loading...</div>)
	}
	else {
		return (
			<div className={"container-movie"}>
				{ hasFavorite &&
					<div>
						<span className={"section-header"}><h2 className={"genre-section"}>Favorite</h2></span>
						<section className={"container-row"}>
						{
							list.map((favoriteMovie) => (
								<div>
									<MovieCard movie={favoriteMovie}/>
								</div>
							))
						}
						</section>
					</div>
				}
				
				{
					movies.movie.map((category, index) => (
						<div>
							<span className={"section-header"}><h2 className={"genre-section"}>{movies.genre[index]}</h2></span>
							<section className={"container-row"}>
								{
									category.map(movie => (
										<MovieCard movie={movie}/>
									))
								}
							</section>
						</div>
					))
				}
			</div>
		)
	}
}
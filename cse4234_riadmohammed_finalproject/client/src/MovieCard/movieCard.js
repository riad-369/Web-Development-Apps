import { useState, useContext } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { FavoriteContext } from "../favorite/favorite";

import "./movieCard.css";

export default function MovieCard ({movie}) {
	const {favorite, contain} = useContext(FavoriteContext);
	const [hasFavorite, setHasFavorite] = contain;
	const [list, setList] = favorite;
	
	const ConvertHM = (second) => {
		let showsTime = true;
		
		if (second === undefined) {
			showsTime = false;
		}
		
		second = Number(second);
		const hours = Math.floor(second/3600);
		const minutes = Math.floor(second % 3600 / 60);
		
		return (showsTime ? `${hours}h ${minutes}m` : "unavailable");
	}
	
	// toggle for movie's description
	const HandleClick = (movie) => {
		console.log(movie)
		setList([...list, movie]);
		setHasFavorite(true);
	}
	
	return (
		<div className={"movie-row"}>
			<section className={"movie-card"}>
				<img className={"movie-poster"} src={movie.info.image_url} alt={"movie-poster"}/>
				<article className={"movie-subfield"}>
					<h3 id={"movie-title"} >{movie.title}</h3>
					<h4>Rating: {movie.info.rating}</h4>
					<h4 id={"movie-desc"} >Duration: {ConvertHM(movie.info.running_time_secs)}</h4>
				</article>
				<button>View Movie</button>
				<button onClick={() => HandleClick(movie)}>Add to Favorite</button>
			</section>
		</div>
	)
}
import { FavoriteContext} from "../favorite/favorite";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Movies from "./movies";
import CookieConsent from 'react-cookie-consent'

import "./movies.css";

export default function MoviePage () {
	const [favorite, setFavorite] = useState([]);
	const [hasFavorites, setHasFavorites] = useState(false);
	const navigate = useNavigate();
	
	const HandleClick = () => {
		navigate("/register");
	}
	
	return (
		<div className={"movie-page-wrapper"}>
			<header className={"movie-header-wrapper"}>
					<h1>NETFLIX</h1>
					<div className={"movie-button"}>
						<button className={"movie-register-button"} onClick={() => HandleClick()}>Register</button>
					</div>
			</header>
			<FavoriteContext.Provider value={{favorite: [favorite, setFavorite], contain: [hasFavorites, setHasFavorites]}}>
				<Movies />
			</FavoriteContext.Provider>
			<CookieConsent>This website uses cookies to enhance the user experience</CookieConsent>
		</div>
	)
}
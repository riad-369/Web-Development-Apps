import { Routes, Route } from "react-router-dom";


import RegisterPage from "./Register/register_page";
import MoviePage from "./Movies/movie_page";

import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route exact path={"/"} element={<MoviePage />} />
       <Route path={"/register"} element={<RegisterPage />} />
     </Routes>
    </div>
  );
}

export default App;

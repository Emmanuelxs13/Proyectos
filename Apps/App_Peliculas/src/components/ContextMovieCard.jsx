import { useEffect, useState } from "react" 
import { get } from "../data/httpClient"
import { MovieCard } from "./MovieCard"
import "../components/ContextMovieCard.css"

export function ContextMovieCard() {
    const [movies, SetMovies] = useState([]);
    // Cargamos los datos 
    useEffect(() => {
        // Se llama a la api
        get("/discover/movie").then((data) => {
            SetMovies(data.results);
        
            });
    }, []);

    return (<ul className="container">
        {/* Mapeamos la data */}
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
        ))}
    </ul>);
}
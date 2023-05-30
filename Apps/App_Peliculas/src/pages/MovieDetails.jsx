import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { getMovieImg } from "../utils/getMovieImg"
import "../pages/MovieDetails.css"

export function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);


    // Cada vez que se cambie el id se ejecute esta consulta
    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setGeneros(data.genres[0]);
        });
    }, [movieId]);
    const imageUrl = getMovieImg(movie.poster_path, 500);

    return (
        <div className="detailsContainer">
            <img src={imageUrl} alt={movie.title} className="col movieImage" />
            <div className="col movieDetails">
                <p className="title">{movie.title}</p>
                <br />
                <p><strong>Genero: </strong>{generos.name}</p>
                <br />
                <p><strong>Descripción: </strong>{movie.overview}</p>
            </div>
        </div>)
}
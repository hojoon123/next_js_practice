import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
    title: "Home",
  }

async function getMovies() {
    return fetch(API_URL).then(response => response.json());
}

export default async function HomePage(){
    const movies = await getMovies();
    return (
        <div className={styles.container}> 
            {movies.map((movie) => (
                <Movie
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                />
        ))}
        </div>
    );
}
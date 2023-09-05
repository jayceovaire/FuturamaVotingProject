import {EpisodeList} from "../static/episodeList.ts";
import Card from "./Card.tsx";


interface MoviesProps{
    movies: EpisodeList
    setMovie: (movie: string) => void;
}

export default function MoviesListComponent(props: MoviesProps) {
  const { movies, setMovie } = props; // Destructuring movies from props

  return (
    <>
      {movies.map((movie) => (
        <Card setState={setMovie} key={movie.number} name={movie.title} />
      ))}
    </>
  );
}
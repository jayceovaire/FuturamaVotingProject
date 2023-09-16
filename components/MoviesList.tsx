import {EpisodeList} from "../static/episodeList.ts";
import Card from "../islands/Card.tsx";


interface MoviesProps{
    movies: EpisodeList
    setMovie: (movie: string) => void;
    setHoverState: (state: number) => void;
}

export default function MoviesListComponent(props: MoviesProps) {
  const { movies,setHoverState, setMovie } = props; // Destructuring movies from props

  return (
    <>
      {movies.map((movie) => (
        <Card setHoverState={setHoverState} setState={setMovie} epnumber={movie.number} name={movie.title} image={movie.imageUrl} />
      ))}
    </>
  );
}
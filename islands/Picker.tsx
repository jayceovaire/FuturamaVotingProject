import {useEffect, useState} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
import {episodes} from "../static/episodeList.ts";
import {characters} from "../static/characterList.ts";
import {movies} from "../static/moviesList.ts";
import EpisodeListComponent from "../components/EpisodeList.tsx";
import MoviesListComponent from "../components/MoviesList.tsx";
import CharacterListComponent from "../components/CharacterList.tsx";


export default function Picker(){
    const [pickChar, setPickChar] = useState(false)
    const [pickEpisode, setPickEpisode] = useState(true)
    const [pickMovie, setPickMovie] = useState(false)

    const [character, setCharacter] = useState('none')
    const [episode, setEpisode] = useState('none')
    const [movie, setMovie] = useState('none')



    const choiceUpdates = useEffect(() => {


    }, [character, movie, episode, pickMovie, pickEpisode, pickChar])


    return (
        <div className={'flex justify-center flex-wrap'}>

            {pickChar && (
                <>
                    <CharacterListComponent setCharacter={setCharacter} characters={characters}/>
                    <div>
                        current character is ..
                    </div>
                    {character}
                </>
            )}
            {pickEpisode && (
                <div className={'text-center font-bold'}>
                  <p>
                      the current episode is...
                    {episode}
                  </p>
                  <EpisodeListComponent setEpisode={setEpisode} episodes={episodes} />
                </div>
              )}
            {pickMovie && (
                <>
                    <MoviesListComponent setMovie={setMovie} movies={movies} />
                    {movie}
                </>
            )}

        </div>
    )
}
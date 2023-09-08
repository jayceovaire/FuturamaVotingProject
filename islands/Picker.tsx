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

    const [hoverState, setHoverState] = useState(0)

    const [character, setCharacter] = useState('none')
    const [episode, setEpisode] = useState('none')
    const [movie, setMovie] = useState('none')



    const choiceUpdates = useEffect(() => {


    }, [character, movie, episode, pickMovie, pickEpisode, pickChar])


    return (
        <div className={'flex flex-wrap'}>

            {pickChar && (
                <div className={'text-center font-bold'}>
                    <p>
                        the current character is...
                        {character}
                    </p>
                    <CharacterListComponent setHoverState={setHoverState} setCharacter={setCharacter} characters={characters}/>
                    {/* Add Component that updates image and episode description when hovering over cards */}

                </div>
            )}
            {pickEpisode && (
                <div className={'text-center font-bold'}>
                  <p>
                      the current episode is...
                    {episode}
                  </p>
                    <div>
                  <EpisodeListComponent setEpisode={setEpisode} episodes={episodes} />
                    </div>
                </div>
              )}
            {pickMovie && (
                <div className={"text-center font-bold"}>
                    <p>The current movie is...
                        {movie}</p>
                    <MoviesListComponent setMovie={setMovie} movies={movies} />
                </div>
            )}

        </div>
    )
}
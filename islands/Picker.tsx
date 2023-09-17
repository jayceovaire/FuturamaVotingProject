import {useEffect, useState} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
import {episodes} from "../static/episodeList.ts";
import {characters} from "../static/characterList.ts";
import {movies} from "../static/moviesList.ts";
import EpisodeListComponent from "../components/EpisodeList.tsx";
import MoviesListComponent from "../components/MoviesList.tsx";
import CharacterListComponent from "../components/CharacterList.tsx";
import InfoCard from "./InfoCard.tsx";
import {Handlers} from "https://deno.land/x/fresh@1.4.3/src/server/types.ts";


export default function Picker(){
    const [pickChar, setPickChar] = useState(false)
    const [pickEpisode, setPickEpisode] = useState(true)
    const [pickMovie, setPickMovie] = useState(false)

    const [hoverState, setHoverState] = useState(1)
    const [imageState, setImageState] = useState("./images/episodes/season_1/Space_Pilot_3000.webp")

    const [character, setCharacter] = useState('none')
    const [episode, setEpisode] = useState('none')
    const [movie, setMovie] = useState('none')


    useEffect(() => {

        async function getEpisodeResponse(episode: string){
            try{
                const response = await fetch(`/api/${episode}`)

                if (!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const data = await response.json()
                return data;
            }catch(error){
                console.error("Failed to fetch episode data:", error)
            }
        }

        const episodeData = getEpisodeResponse(episode);
        console.log(episodeData)
        console.log(episode)

}, [episode]); // This useEffect runs whenever 'episode' state changes



    return (
        <div className={'flex flex-wrap'}>

            {pickChar && (
                <div className={'text-center font-bold'}>
                    <p>
                        the current character is...
                        {character}
                    </p>
                    <CharacterListComponent setHoverState={setHoverState} setCharacter={setCharacter} characters={characters}/>


                </div>
            )}
            {pickEpisode && (
                <div className={'font-bold'}>
                    <p className={'text-center'}>
                        the current episode is...
                        {episode}
                    </p>
                    <div className={'grid grid-cols-12'}>
                        <div className={'col-start-1 col-span-8'}>
                        <EpisodeListComponent setHoverState={setHoverState} setEpisode={setEpisode} setImageState={setImageState} episodes={episodes} />
                        </div>
                        <div className={'col-start-10 col-span-2'}>
                            <InfoCard imageState={imageState} hoverState={hoverState} />
                        </div>
                    </div>
                </div>
            )}

            {pickMovie && (
                <div className={"text-center font-bold"}>
                    <p>The current movie is...
                        {movie}</p>
                    <MoviesListComponent setHoverState={setHoverState} setMovie={setMovie} movies={movies} />
                </div>
            )}

        </div>
    )
}
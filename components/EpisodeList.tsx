import Card from "../islands/Card.tsx";
import {EpisodeList} from "../static/episodeList.ts";

interface EpisodeListProps {
    episodes: EpisodeList
    setEpisode: (episode: string) => void;
    setHoverState: (state: number) => void;
    setImageState: (state: string) => void;
}


export default function EpisodeListComponent(props: EpisodeListProps){
    const {episodes, setEpisode, setHoverState, setImageState} = props


    return (
    <div className={"grid grid-cols-4 gap-2"}>
      {episodes.map((episode) => (
        <Card name={episode.title} epnumber={episode.number} setState={setEpisode} setHoverState={setHoverState} setImageState={setImageState} image={episode.imageUrl}  />
      ))}
    </div>
  );
}
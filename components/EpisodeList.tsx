import Card from "./Card.tsx";
import {EpisodeList} from "../static/episodeList.ts";

interface EpisodeListProps {
    episodes: EpisodeList
    setEpisode: (episode: string) => void;
}


export default function EpisodeListComponent(props: EpisodeListProps){
    const {episodes, setEpisode} = props


    return (
    <div className={"grid grid-cols-4 gap-2 px-4 py-4"}>
      {episodes.map((episode) => (  // Mapping over episodes
        <Card name={episode.title} key={episode.number} setState={setEpisode} image={episode.imageUrl} />
      ))}
    </div>
  );
}
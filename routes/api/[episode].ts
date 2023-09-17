import {Handlers} from "https://deno.land/x/fresh@1.4.3/src/server/types.ts";
import {episodes} from "../../static/episodeList.ts";

export const handler: Handlers = {
  GET(req) {
    // Extract the episode title from the URL
    const episodeTitleFromUrl = decodeURIComponent(req.url.split("/").pop() || '');

    // Check if the episodeTitleFromUrl exists in the episodes list
    const matchingEpisode = episodes.find(episode => episode.title === episodeTitleFromUrl);

    if (matchingEpisode) {
      return new Response(JSON.stringify(matchingEpisode), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // If not found, return a 404 error with a relevant message
      return new Response(JSON.stringify({ message: "Episode not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }
  },
};




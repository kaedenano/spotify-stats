import { Session } from "next-auth";
import { getApiData } from "./getApiData";

type Track = {
  id: string;
}

type tracks = {
  items: Track[];
}



export const getFeatures = async (tracks: tracks, session: Session) => {

    let features = [];

    for (let i = 0; i < 20; i++) {
        features[i] = await getApiData('https://api.spotify.com/v1/audio-features/' + tracks.items[i].id, session);
    }

    return features;

}
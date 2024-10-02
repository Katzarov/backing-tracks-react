import { useGetPlaylistWithTracksQuery } from "../../store/api/playlists";

import { TrackList } from "../../components/track-list/TrackList";
import { useParams } from "react-router-dom";
import { routes } from "../routes";

export const TracksOfPlaylist = () => {
  const { playlistId } = useParams();
  const { data, isLoading, isError } = useGetPlaylistWithTracksQuery(
    playlistId!
  );

  if (isError) return "show error";

  return (
    <TrackList
      data={data?.tracks}
      isLoading={isLoading}
      trackItemClickRouteNavigateTo={routes.app.playlist.track.uri}
    />
  );
};
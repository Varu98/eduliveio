import axios from "axios";

export const removeVideoFromPlaylist = async (
  videoID,
  playlistID,
  token,
  playlistsDispatch
) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistID}/${videoID}`,
      {
        headers: { authorization: token },
      }
    );
    console.log(data, videoID, playlistID);
    playlistsDispatch({
      type: "REMOVE_VIDEO_FROM_PLAYLIST",
      payload: data.playlist,
    });
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";

export const addVideoToPlaylist = async (
  video,
  playlistID,
  token,
  playlistsDispatch
) => {
  try {
    const { data } = await axios.post(
      `/api/user/playlists/${playlistID}`,
      { video },
      {
        headers: { authorization: token },
      }
    );
    console.log(data);
    playlistsDispatch({
      type: "ADD_VIDEO_TO_PLAYLIST",
      payload: data.playlist,
    });
  } catch (error) {
    console.log(error);
  }
};

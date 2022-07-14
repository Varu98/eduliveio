import axios from "axios";

export const addNewPlaylist = async (
  token,
  title,
  video,
  playlistsDispatch
) => {
  try {
    const { data } = await axios.post(
      "/api/user/playlists",
      { playlist: { title: title } },
      {
        headers: { authorization: token },
      }
    );
    console.log(data, token, video);
    playlistsDispatch({ type: "ADD_PLAYLIST", payload: data.playlists });
  } catch (error) {
    console.log(error.response, token);
  }
};

import axios from "axios";

export const deletePlaylist = async (playlistID, token, playlistsDispatch) => {
  try {
    const { data } = await axios.delete(`/api/user/playlists/${playlistID}`, {
      headers: { authorization: token },
    });
    console.log(data);
    playlistsDispatch({ type: "DELETE_PLAYLIST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

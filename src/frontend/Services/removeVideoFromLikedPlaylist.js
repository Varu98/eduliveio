import axios from "axios";

export const removeVideoFromLikedPlaylist = async (
  videoID,
  token,
  playlistsDispatch
) => {
  try {
    const { data } = await axios.delete(`/api/user/likes/${videoID}`, {
      headers: { authorization: token },
    });
    playlistsDispatch({
      type: "DELETE_VIDEO_FROM_LIKED_PLAYLIST",
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

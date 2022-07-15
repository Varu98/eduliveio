import axios from "axios";

export const addVideoToLikedPlaylist = async (
  video,
  token,
  playlistsDispatch
) => {
  try {
    const { data } = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: { authorization: token },
      }
    );
    playlistsDispatch({ type: "ADD_VIDEO_TO_LIKED_PLAYLIST", payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};

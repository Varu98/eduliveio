export const initialPlaylists = {
  history: [],
  watchLater: [],
  playlists: [],
};
export const playlistsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_HISTORY":
      return { ...state, history: [...state.history, payload] };
    case "CLEAR_HISTORY":
      return { ...state, history: [] };
    case "SAVE_TO_WATCH_LATER":
      return { ...state, watchLater: [...state.watchLater, payload] };
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchLater: [
          ...state.watchLater.filter((video) => video.id !== payload),
        ],
      };
    case "ADD_PLAYLIST":
      return {
        ...state,
        playlists: [...payload],
      };
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === payload._id ? payload : playlist
        ),
      };
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === payload._id ? payload : playlist
        ),
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        ...payload,
      };
    case "ADD_VIDEO_TO_LIKED_PLAYLIST":
      return {
        ...state,
        ...payload,
      };
    case "DELETE_VIDEO_FROM_LIKED_PLAYLIST":
      return {
        ...state,
        ...payload,
      };

    default:
      return { ...state };
  }
};

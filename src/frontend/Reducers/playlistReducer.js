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
        playlists: [
          ...state.playlists,
          { name: payload.name, videoToAdd: [payload.videoToAdd] },
        ],
      };
    default:
      return { ...state };
  }
};

import { useContext, useReducer, useEffect } from "react";
import {
  initialPlaylists,
  playlistsReducer,
} from "../Reducers/playlistReducer";

const { createContext } = require("react");

const playlistContext = createContext(null);

const PlaylistProvider = ({ children }) => {
  const [playlistsState, playlistsDispatch] = useReducer(
    playlistsReducer,
    initialPlaylists
  );
  useEffect(() => {
    console.log(playlistsState);
  }, [playlistsState]);
  return (
    <playlistContext.Provider
      value={{
        playlistsState,
        playlistsDispatch,
      }}
    >
      {children}
    </playlistContext.Provider>
  );
};

export const usePlaylist = () => useContext(playlistContext);

export default PlaylistProvider;

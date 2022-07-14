import axios from "axios";
import { useContext, useReducer, useEffect } from "react";
import {
  initialPlaylists,
  playlistsReducer,
} from "../Reducers/playlistReducer";
import { useAuth } from "./AuthContext";

const { createContext } = require("react");
const playlistContext = createContext(null);

// Playlist Provider
const PlaylistProvider = ({ children }) => {
  const [playlistsState, playlistsDispatch] = useReducer(
    playlistsReducer,
    initialPlaylists
  );

  const {
    authState: { token },
  } = useAuth();

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

import { useContext } from "react";

const { createContext } = require("react");

const playlistContext = createContext(null);

const PlaylistProvider = ({ children }) => {
  // useEffect(() => {
  //   const data = axios.get("/api/user/playlist");
  //   console.log(data);
  // });
  return <playlistContext.Provider>{children}</playlistContext.Provider>;
};

export const usePlaylist = () => useContext(playlistContext);

export default PlaylistProvider;

import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const videoContext = createContext(null);

const useVideos = () => useContext(videoContext);

const VideoProvider = ({ children }) => {
  // using useState hook to set the data in state
  const [videoData, setVideosData] = useState([]);

  //   calling the videos data
  useEffect(() => {
    try {
      (async () => {
        const {
          data: { videos },
        } = await axios.get("/api/videos");
        setVideosData(videos);
      })();
    } catch (error) {
      console.log(
        "An error occurred while fetching videos in the videoContext, ",
        error
      );
    }
  }, []);

  return (
    <videoContext.Provider value={{ videoData }}>
      {children}
    </videoContext.Provider>
  );
};

export { useVideos, VideoProvider };

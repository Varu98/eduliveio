import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { reduceToTrending } from "../Services/reduceToTrending";
import { filterReducer, initialVideoState } from "../Reducers/filterReducer";

const videoContext = createContext(null);

const useVideos = () => useContext(videoContext);

const VideoProvider = ({ children }) => {
  // using useState hook to set the data in state
  const [videoData, setVideosData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  console.log(categoriesData);

  //   calling the videos data
  useEffect(() => {
    try {
      (async () => {
        const {
          data: { videos },
        } = await axios.get("/api/videos");
        setVideosData(videos);
      })();
      (async () => {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        setCategoriesData(categories);
      })();
    } catch (error) {
      console.log(
        "An error occurred while fetching videos in the videoContext, ",
        error
      );
    }
  }, []);

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialVideoState
  );

  const filterVideos = reduceToTrending(filterState, videoData);

  return (
    <videoContext.Provider
      value={{
        videoData,
        categoriesData,
        filterState,
        filterDispatch,
        filterVideos,
      }}
    >
      {children}
    </videoContext.Provider>
  );
};

export { useVideos, VideoProvider };

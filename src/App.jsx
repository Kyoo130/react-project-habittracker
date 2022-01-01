<<<<<<< HEAD
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js'
import Habit from './components/Habit';


function App() {
  return (
   <div>
     <Habit />
   </div>
=======
import { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/search_header/SearchHeader";
import VideoDetail from "./components/video_detail/VideoDetail";
import VideoList from "./components/video_list/VideoList";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);

  const selectVideo = (video) => {
    setselectedVideo(video);
  };

  const search = useCallback((query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setselectedVideo(null);
      });
  }, [youtube]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
>>>>>>> 2f225e973bc678610450043a86f1c2c7c11e0785
  );
}

export default App;

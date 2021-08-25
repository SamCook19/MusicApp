import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Desole",
      artist: "Gorillaz",
      img_src: "./images/songmachine.jpg",
      src: "./music/Gorillaz - Désolé ft. Fatoumata Diawara (Official Lyric Video).mp3"
    },
    {
      title: "Clint Eastwood",
      artist: "Gorillaz",
      img_src: "./images/clinteastwood.jpg",
      src: "./music/Clint Eastwood.mp3"
    },
    {
      title: "Feel Good Inc.",
      artist: "Gorillaz",
      img_src: "./images/demondays.jpg",
      src: "./music/Gorillaz - Feel Good Inc HD.mp3"
    },
  ])

  const [
    currentSongIndex, setCurrentSongIndex
  ] = useState(0);

  const [
    nextSongIndex, setNextSongIndex
  ] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import styles from "./MusicPlayer.module.css";

const songs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
  },
  {
    title: "Starboy",
    artist: "The Weeknd",
    cover: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=500",
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500",
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=500",
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    cover: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=500",
  },
];

function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    console.log("Player started");

    return () => {
      console.log("Player closed");
    };
  }, []);

  useEffect(() => {
    setProgress(0);
  }, [currentSong]);

  const song = songs[currentSong];

  const nextSong = () => {
    setCurrentSong((current) => (current + 1) % songs.length);
    setIsPlaying(true);
  };

  return (
    <div className={styles.player}>
      <h1 className={styles.heading}>Music Player</h1>

      <img
        className={styles.cover}
        src={song.cover}
        alt={song.title}
      />

      <h2>{song.title}</h2>
      <p className={styles.artist}>{song.artist}</p>

      <div className={styles.progressContainer}>
        <div
          className={styles.progress}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.playButton}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button
          className={styles.nextButton}
          onClick={nextSong}
        >
          Следующий трек
        </button>
      </div>

      <p className={styles.counter}>
        Трек {currentSong + 1} из {songs.length}
      </p>
    </div>
  );
}

export default MusicPlayer;
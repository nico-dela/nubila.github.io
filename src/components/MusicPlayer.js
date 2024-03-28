import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  MdPlayArrow,
  MdPause,
  MdSkipNext,
  MdSkipPrevious,
  MdVolumeUp,
  MdVolumeDown,
  MdVolumeMute,
} from "react-icons/md";
import "../styles/MusicPlayer.css";

import BoleritoStapelia from "../assets/music/Bolerito de Stapelia.mp3";
import Frio from "../assets/music/Frio.mp3";
import Girasoles from "../assets/music/Girasoles.mp3";
import Limonero from "../assets/music/Limonero.mp3";
import MariposaOrigami from "../assets/music/Mariposa Origami.mp3";
import Oceanica from "../assets/music/Oceanica.mp3";
import OceanicaAcustica from "../assets/music/OceanicaAcustica.mp3";
import Manneporte from "../assets/music/Manneporte.mp3";

import { motion } from "framer-motion";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState({});
  const [progress, setProgress] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [volume, setVolume] = useState(100);
  const [isVolumeSliderVisible, setIsVolumeSliderVisible] = useState(false);

  const songs = useMemo(
    () => [
      { title: "Oceanica", source: Oceanica },
      { title: "Girasoles", source: Girasoles },
      { title: "Limonero", source: Limonero },
      { title: "Bolerito de Stapelia", source: BoleritoStapelia },
      { title: "The Manneporte", source: Manneporte },
      { title: "Frio", source: Frio },
      { title: "Mariposa Origami", source: MariposaOrigami },
      { title: "Oceanica Acústica", source: OceanicaAcustica },
    ],
    []
  );

  useEffect(() => {
    audioRef.current.src = songs[currentSongIndex].source;
    setCurrentSong(songs[currentSongIndex]);
  }, [currentSongIndex, songs]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  const handlePreviousSong = () => {
    const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(previousIndex);
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const progressPercentage = (currentTime / duration) * 100;
    if (!isSeeking) {
      setProgress(progressPercentage);
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const handleSeekStart = () => {
    setIsSeeking(true);
  };

  const handleSeekEnd = () => {
    setIsSeeking(false);
  };

  const handleSongEnd = () => {
    handleNextSong();
  };

  const handleVolumeIconClick = (e) => {
    if (volumeSliderRef.current?.contains(e.target)) {
      return;
    }
    setIsVolumeSliderVisible(!isVolumeSliderVisible);
  };

  const handleVolume = (e) => {
    const newVolume = Number(e.target.value);
    audioRef.current.volume = newVolume / 100;
    setVolume(newVolume);
  };

  return (
    <motion.div
      className="music-player-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="music-player"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="volume-control"
          whileHover={{ scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="volume-icon"
            onClick={handleVolumeIconClick}
            onMouseLeave={() => setIsVolumeSliderVisible(false)}
            onMouseEnter={() => setIsVolumeSliderVisible(true)}
            whileHover={{ scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {volume === 0 ? (
              <MdVolumeMute size={24} />
            ) : volume <= 50 ? (
              <MdVolumeDown size={24} />
            ) : (
              <MdVolumeUp size={24} />
            )}

            {isVolumeSliderVisible && (
              <motion.div
                className="volume-slider-container"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  ref={volumeSliderRef}
                  type="range"
                  className="volume-slider"
                  value={volume}
                  min="0"
                  max="100"
                  onChange={handleVolume}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        <div className="song-info">
          <div className="song-title">{currentSong.title}</div>
          <input
            type="range"
            className="progress-bar"
            value={progress}
            max="100"
            onChange={handleSeek}
            onMouseDown={handleSeekStart}
            onMouseUp={handleSeekEnd}
          />
        </div>
        <div className="controls">
          <button onClick={handlePreviousSong}>
            <MdSkipPrevious />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? <MdPause /> : <MdPlayArrow />}
          </button>
          <button onClick={handleNextSong}>
            <MdSkipNext />
          </button>
        </div>
      </motion.div>

      <audio
        ref={audioRef}
        autoPlay={isPlaying}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnd}
        volume={volume / 100}
      />
    </motion.div>
  );
};

export default MusicPlayer;

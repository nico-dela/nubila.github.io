import React, { useState, useRef, useEffect, useMemo } from 'react';
import { MdPlayArrow, MdPause, MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import '../styles/MusicPlayer.css';

import BoleritoStapelia from '../assets/music/Bolerito de Stapelia.mp3';
import Frio from '../assets/music/Frio.mp3';
import Girasoles from '../assets/music/Girasoles.mp3';
import Limonero from '../assets/music/Limonero.mp3';
import MariposaOrigami from '../assets/music/Mariposa Origami.mp3';
import Oceanica from '../assets/music/Oceanica.mp3';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState({});
  const [progress, setProgress] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  const songs = useMemo(
    () => [
      { title: 'Bolerito de Stapelia', source: BoleritoStapelia },
      { title: 'Frio', source: Frio },
      { title: 'Girasoles', source: Girasoles },
      { title: 'Limonero', source: Limonero },
      { title: 'Mariposa Origami', source: MariposaOrigami },
      { title: 'Oceanica', source: Oceanica },
    ],
    []
  );

  useEffect(() => {
    audioRef.current.src = songs[currentSongIndex].source;
    setCurrentSong(songs[currentSongIndex]);
    setIsPlaying(true); // Reproducir automáticamente al iniciar
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

  return (
    <div className="music-player-container">
      <div className="music-player">
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
      </div>
      <audio
        ref={audioRef}
        autoPlay={isPlaying}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnd}
      />
    </div>
  );
};

export default MusicPlayer;

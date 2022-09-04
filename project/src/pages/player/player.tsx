import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDisptach, useAppSelector } from '../../hooks';
import { fetchFilm } from '../../store/api-action';
import { selectFilm, selectFilmLoading } from '../../store/films-slice/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

const DECIMAL_PLACES = 2;
const FULL_TIME_IN_PERCENT = 100;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

function Player() {
  const dispatch = useAppDisptach();
  const {id} = useParams();
  const navigate = useNavigate();
  const film = useAppSelector(selectFilm);
  const isFilmLoading = useAppSelector(selectFilmLoading);
  const video = useRef<HTMLVideoElement>(null);
  const [stateVideo, setStateVideo] = useState({
    playText: 'Pause',
    useLink: '#pause',
    viewBox: '0 0 14 21',
    widthButton: '14',
    heightButton: '21',
    timeValue: video.current?.currentTime ? Math.floor(video.current.currentTime) : 0,
  });
  const [currentWatchedPercent, setCurrentWatchedPercent] = useState(0);

  useEffect(() => {

    if (video.current) {
      video.current.addEventListener('timeupdate', updateTime);
      return () => video.current?.removeEventListener('timeupdate', updateTime);
    }
  },[video.current]);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(+id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    setStateVideo({
      ...stateVideo,
      timeValue: video.current?.currentTime ? Math.floor(video.current.currentTime) : 0
    });
  }, []);

  const handleClickExit = (evt: React.MouseEvent) => {
    evt.preventDefault();
    navigate(`/films/${id}`);
  };

  function getDurationVideo (duration: number | undefined, currentTime: number | undefined) {
    if (duration && currentTime) {
      const time = Math.floor(duration - currentTime);
      const hours = Math.floor(time / SECONDS_IN_HOUR);
      const minute = Math.floor(time % SECONDS_IN_HOUR / SECONDS_IN_MINUTE);
      const seconds = time % SECONDS_IN_MINUTE;
      const formattedSeconds = seconds.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      const formattedHours = hours.toString().padStart(2, '0');

      return `-${hours !== 0 ? `${formattedHours}:` : ''}${formattedMinute}:${formattedSeconds}`;
    }
  }

  function updateTime () {
    if (video.current?.currentTime || video.current?.duration) {
      const percent = FULL_TIME_IN_PERCENT * Number((video.current.currentTime).toFixed(DECIMAL_PLACES)) / Number((video.current.duration).toFixed(DECIMAL_PLACES));
      setCurrentWatchedPercent(Math.round(percent));
    }
  }

  const handleClickPlayPause = () => {
    if (video.current?.paused) {
      setStateVideo({
        ...stateVideo,
        playText: 'Pause',
        useLink: '#pause',
        viewBox: '0 0 14 21',
        widthButton: '14',
        heightButton: '21',
      });
      video.current?.play();

    } else {
      setStateVideo({
        ...stateVideo,
        playText: 'Play',
        useLink: '#play-s',
        viewBox: '0 0 19 19',
        widthButton: '19',
        heightButton: '19',
      });
      video.current?.pause();

    }

  };

  const handleCkickFullScreen = () => {
    if (!document.fullscreenElement && video.current) {
      video.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  if (isFilmLoading || !film) {
    return <LoadingScreen />;
  }

  return (
    <div className="player">
      <video src={film?.videoLink} ref={video} autoPlay className="player__video" poster={film?.backgroundImage}>

      </video>

      <button onClick={handleClickExit} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${(Number(video.current?.currentTime.toFixed(DECIMAL_PLACES)))}`} max={`${(video.current?.duration ? video.current?.duration : 0)}`}></progress>
            <div className="player__toggler" style={{
              left: `${currentWatchedPercent}%`,
            }}
            >Toggler
            </div>
          </div>
          <div className="player__time-value">{getDurationVideo(video.current?.duration, video.current?.currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={handleClickPlayPause} type="button" className="player__play">
            <svg viewBox={stateVideo.viewBox} width={stateVideo.widthButton} height={stateVideo.heightButton}>
              <use xlinkHref={stateVideo.useLink}></use>
            </svg>
            <span>{stateVideo.playText}</span>
          </button>
          <div className="player__name">{film?.name}</div>

          <button onClick={handleCkickFullScreen} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;

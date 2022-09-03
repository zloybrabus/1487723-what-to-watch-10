import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDisptach } from '../../hooks';
import { fetchFilm } from '../../store/api-action';
import { selectFilmLoading, selectFilm } from '../../store/films-slice/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import PlayerButtons from '../../components/player-buttons/player-buttons';
import PlayerTimer from '../../components/player-buttons/player-timer';

function Player(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDisptach();
  const isFilmLoading = useAppSelector(selectFilmLoading);
  const film = useAppSelector(selectFilm);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchFilm(+id));
  },[dispatch, id]);

  const handleExitButtonClick = () => {
    navigate(-1);
  };

  const handlePlayerButtonsClick = () => {
    if(isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullscreenClick = () => {
    videoRef.current?.requestFullscreen();
  };

  if(isFilmLoading || !film) {
    return <LoadingScreen />;
  }

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
      >
      </video>

      <button
        onClick={handleExitButtonClick}
        type="button"
        className="player__exit"
      >
        Exit
      </button>

      <div className="player__controls">
        <PlayerTimer
          isPlaying={isPlaying}
          filmDuration={film.runTime}
        />

        <PlayerButtons
          isPlaying={isPlaying}
          handlePlayerButtonsClick={handlePlayerButtonsClick}
          handleFullscreenClick={handleFullscreenClick}
        />
      </div>
    </div>
  );
}

export default Player;

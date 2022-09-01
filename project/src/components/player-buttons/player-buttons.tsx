import { MouseEventHandler } from 'react';
import FullScreenButton from './fullscreen-button';
import PauseButton from './pause-button';
import PlayButton from './play-button';

type PlayerButtonsProps = {
  isPlaying: boolean,
  handlePlayerButtonsClick: MouseEventHandler<HTMLButtonElement>,
  handleFullscreenClick: MouseEventHandler<HTMLButtonElement>,
}

function PlayerButtons(
  {
    isPlaying,
    handlePlayerButtonsClick,
    handleFullscreenClick,
  }: PlayerButtonsProps): JSX.Element {
  return (
    <div className="player__controls-row">
      {isPlaying
        ? (
          <PauseButton
            handlePlayerButtonsClick={handlePlayerButtonsClick}
          />
        )
        : (
          <PlayButton
            handlePlayerButtonsClick={handlePlayerButtonsClick}
          />
        )}
      <div className="player__name">Transpotting</div>

      <FullScreenButton
        handleFullscreenClick={handleFullscreenClick}
      />
    </div>
  );
}

export default PlayerButtons;

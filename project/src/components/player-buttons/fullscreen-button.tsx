
import { MouseEventHandler } from 'react';

type FullScreenButtonProps = {
  handleFullscreenClick: MouseEventHandler<HTMLButtonElement>,
}

function FullScreenButton({handleFullscreenClick}: FullScreenButtonProps): JSX.Element {
  return (
    <button
      onClick={handleFullscreenClick}
      type="button"
      className="player__full-screen"
    >
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}

export default FullScreenButton;

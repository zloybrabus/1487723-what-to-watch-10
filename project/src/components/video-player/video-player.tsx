import { useRef } from 'react';

type VideoPlayerType = {
  video: string;
  img: string;
}

function VideoPlayer ({video, img}: VideoPlayerType) {
  const playRef = useRef<HTMLVideoElement>(null);

  const playVideoTimeout = () => {
    playRef.current && playRef.current.play();
  };
  setTimeout(playVideoTimeout, 1000);

  return(
    <video ref={playRef} src={video} muted loop width='280' height='175' poster={img}>

    </video>
  );
}
export default VideoPlayer;

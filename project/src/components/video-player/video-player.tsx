import { useRef, useEffect } from 'react';

type VideoPlayerProps = {
  video: string;
  img: string;
}

function VideoPlayer ({video, img}: VideoPlayerProps) {
  const playRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideoTimeout = setTimeout(() =>
      playRef.current && playRef.current.play(),
    1000);

    return () => clearTimeout(playVideoTimeout);
  });

  return(
    <video ref={playRef} src={video} muted loop width='280' height='175' poster={img} />
  );
}
export default VideoPlayer;

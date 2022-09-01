type VideoPlayerProps = {
  src: string,
  img: string,
}

function VideoPlayer({ src }: VideoPlayerProps): JSX.Element {
  return (
    <video
      src={src}
      autoPlay
      width="280"
      height="175"
      muted
    />
  );
}

export default VideoPlayer;

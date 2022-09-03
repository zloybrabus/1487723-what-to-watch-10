type VideoPlayerProps = {
  src: string,
  img?: string,
}

function VideoPlayer({ src, img }: VideoPlayerProps): JSX.Element {
  return (
    <video
      src={src || img}
      autoPlay
      width="280"
      height="175"
      muted
      loop
    />
  );
}

export default VideoPlayer;

export default function VideoBackground({ videoSrc, children }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        className="absolute z-0 top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}

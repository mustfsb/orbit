export function VideoSection() {
  return (
    <section className="px-site pb-section">
      <div className="max-w-site mx-auto">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-2xl border-[0.5px] border-foreground/15"
        />
      </div>
    </section>
  );
}

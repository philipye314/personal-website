export default function Hero() {
  return (
    <section className="grid grid-cols-12 gap-12 items-center min-h-[600px] mb-40">
      <div className="col-span-12 md:col-span-7">
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-6 block">
          System Initialization // 2024
        </span>
        <h1 className="text-[4rem] font-headline font-bold leading-[1] tracking-[-0.04em] mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90">
            Hi, I'm{' '}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-secondary via-white to-tertiary-fixed-dim">
            Philip
          </span>
        </h1>
        <p className="text-xl text-on-surface/80 max-w-xl leading-relaxed font-light">
          Full-stack architect specializing in high-performance distributed systems,
          obsidian-themed interfaces, and cloud-native infrastructure.
        </p>
      </div>
      <div className="col-span-12 md:col-span-5"></div>
    </section>
  )
}

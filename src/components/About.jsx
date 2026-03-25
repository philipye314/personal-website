export default function About() {
  return (
    <section className="grid grid-cols-12 gap-12 mb-40 items-start">
      <div className="col-span-12 md:col-span-5">
        <div className="aspect-square relative rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <img
            alt="Architectural Abstract"
            className="object-cover w-full h-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHDl_9g7uvRtRvri1VTW6hRrr78h5_jQka1LM9yG53Z20qVhgH6tRWWM96y4mhi2GoYvBPTDTK-hq9s7GCAgRsPHLLZbFWPWLgjqJIvJwGnXZ06g95yhp7p2Yp9pZ0GBVJLI4PjbMRBok_UDh6MU_4VojSM7lKDD-Sh9xnAOuZdxzWh_TlMUtLZg2yvrX0eyYUAQdOiKQH6T5m96l02eZZ37UW23sSnmHvTTUEoTyOMjbpxSzD8qeOYGPrUNyPFP5QFoS0gLZEQDKl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-7 pt-4">
        <h2 className="text-3xl font-headline font-bold text-white mb-8 tracking-tight">
          DESIGN PHILOSOPHY
        </h2>
        <div className="space-y-6 text-on-surface/60 leading-relaxed text-lg font-light">
          <p>
            Software is the modern concrete. I approach digital products with the mindset of an
            architect: structural integrity first, followed by an uncompromising commitment to
            aesthetic minimalism.
          </p>
          <p>
            Every line of code should serve a purpose. Every pixel should be intentional. My work
            focuses on removing the noise until only the essential remains, creating interfaces that
            feel as solid as obsidian and as light as air.
          </p>
        </div>
      </div>
    </section>
  )
}

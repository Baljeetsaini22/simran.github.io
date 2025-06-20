function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center bg-black text-white px-6"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Hi, I'm Simran
        </h1>
        <h2 className="text-2xl md:text-3xl text-teal-300 font-medium mb-4">
          UI & UX Designer
        </h2>
        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          I design bold visuals, powerful brand stories, and user-friendly experiences. Let’s bring your ideas to life through design.
        </p>
        <a
          href="#portfolio"
          className="inline-block px-6 py-3 text-black font-semibold rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 hover:scale-105 transition"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
}

export default Hero;

function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="page-container">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full gradient-bg" />

              <span className="text-xs font-semibold text-slate-600 sm:text-sm">
                Build your perfect developer stack
              </span>
            </div>

            <h1 className="font-jakarta text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Choose the right
              <span className="gradient-text block">
                tools to build.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Explore modern technologies, compare your options, and build a
              personalized development stack for your next project.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#technologies" className="primary-button">
                Explore Technologies

                <span aria-hidden="true" className="ml-2 text-base">
                  →
                </span>
              </a>

              <a href="#about" className="secondary-button">
                Learn More
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">15+</span>
                <span>Technologies</span>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-4 w-px bg-slate-200 sm:block"
              />

              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">7</span>
                <span>Categories</span>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-4 w-px bg-slate-200 sm:block"
              />

              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">1</span>
                <span>Custom Stack</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-300/30 blur-3xl sm:h-96 sm:w-96"
            />
            <div className="relative flex items-center justify-center">
              <img
                src="/images/banner-stack.png"
                alt="Developer technology stack illustration"
                className="h-auto w-full max-w-[526px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
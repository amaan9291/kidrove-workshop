function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1600px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-12 lg:py-24 2xl:px-20">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-orange-600 shadow-sm">
            Summer Workshop 2026
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl 2xl:text-7xl">
            AI & Robotics Summer Workshop
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl">
            A fun and interactive 4-week online workshop where children explore
            artificial intelligence, robotics, logic building, and creative
            problem-solving through hands-on activities.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#register"
              className="rounded-full bg-orange-500 px-8 py-4 text-center text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Enroll Now
            </a>

            <a
              href="#details"
              className="rounded-full bg-white px-8 py-4 text-center text-base font-bold text-slate-800 shadow-sm ring-1 ring-orange-100 transition hover:-translate-y-0.5 hover:text-orange-600"
            >
              View Details
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-orange-100 sm:p-8">
            <div className="rounded-[1.5rem] bg-orange-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
                Workshop Highlights
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Learn AI through fun robotics concepts
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Age Group</p>
                  <p className="mt-1 text-xl font-black text-slate-900">
                    8–14 Years
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Duration</p>
                  <p className="mt-1 text-xl font-black text-slate-900">
                    4 Weeks
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Mode</p>
                  <p className="mt-1 text-xl font-black text-slate-900">
                    Online
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Fee</p>
                  <p className="mt-1 text-xl font-black text-slate-900">
                    ₹2,999
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm text-orange-200">Starts on</p>
                <p className="mt-1 text-2xl font-black">15 July 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
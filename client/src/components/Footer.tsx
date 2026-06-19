function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-12 2xl:px-20">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <h2 className="text-xl font-black">Kidrove</h2>
          <p className="mt-1 text-sm text-slate-400">
            Helping children discover fun and meaningful learning experiences.
          </p>
        </div>

        <p className="text-sm text-slate-400">
          AI & Robotics Summer Workshop · 2026
        </p>
      </div>
    </footer>
  );
}

export default Footer;
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 lg:px-12 2xl:px-20">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white">
            K
          </span>
          <span className="text-xl font-extrabold text-slate-900">
            Kidrove
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <a href="#details" className="hover:text-orange-600">
            Details
          </a>
          <a href="#outcomes" className="hover:text-orange-600">
            Outcomes
          </a>
          <a href="#faq" className="hover:text-orange-600">
            FAQ
          </a>
        </div>

        <a
          href="#register"
          className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
        >
          Register
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
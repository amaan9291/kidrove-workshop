import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 lg:px-12 2xl:px-20">
        <a href="#" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white">
            K
          </span>
          <span className="text-xl font-extrabold text-slate-900">
            Kidrove
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
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

        <div className="flex items-center gap-3">
          <a
            href="#register"
            onClick={closeMenu}
            className="hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 sm:inline-flex"
          >
            Register
          </a>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 ring-1 ring-orange-100 transition hover:bg-orange-100 lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Dropdown Menu */}
      {isMenuOpen && (
        <div className="border-t border-orange-100 bg-white px-4 py-4 shadow-lg sm:px-6 lg:hidden">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-3">
            <a
              href="#details"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-bold text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
            >
              Details
            </a>

            <a
              href="#outcomes"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-bold text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
            >
              Outcomes
            </a>

            <a
              href="#faq"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-bold text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
            >
              FAQ
            </a>

            <a
              href="#register"
              onClick={closeMenu}
              className="mt-2 rounded-2xl bg-orange-500 px-4 py-3 text-center text-base font-black text-white shadow-sm transition hover:bg-orange-600 sm:hidden"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
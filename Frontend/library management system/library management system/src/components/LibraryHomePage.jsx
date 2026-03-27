import { Link } from "react-router-dom";
import { useState } from "react";

export default function LibraryHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1b1b1b] px-4 py-5 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-2 text-xl text-[#7d7d7d]">home</div>

        <section className="relative overflow-hidden bg-black shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1600&q=80"
            alt="Library books"
            className="h-[78vh] min-h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex flex-col">
            <div className="p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="inline-flex items-center justify-center text-white text-5xl leading-none"
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>

            <div className="flex flex-1 items-center px-8 pb-24 sm:px-16">
              <div className="max-w-md">
                <h1 className="font-serif text-5xl leading-[1.05] text-white sm:text-6xl">
                  LIBRARY
                  <br />
                  MANAGEMENT
                  <br />
                  SYSTEM
                </h1>

                <Link
                  to="/login"
                  className="mt-8 inline-flex h-14 min-w-[135px] items-center justify-center rounded-md bg-[#1150a4] px-8 text-3xl font-medium text-white shadow-lg transition hover:bg-[#0d448a]"
                >
                  login
                </Link>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-[#c7c7c7]" />
              <span className="h-6 w-6 rounded-full bg-[#676767]" />
              <span className="h-6 w-6 rounded-full bg-[#676767]" />
            </div>
          </div>

          {isMenuOpen && (
            <>
              <div
                className="absolute inset-0 bg-black/35"
                onClick={() => setIsMenuOpen(false)}
              />

              <aside className="absolute left-0 top-0 z-20 flex h-full w-[260px] flex-col bg-gradient-to-b from-[#0d1b78] via-[#1653a7] to-[#1f7af2] px-5 py-5 shadow-2xl">
                <div className="mb-5 flex h-[62px] w-full items-center justify-between border-2 border-white px-4 text-white">
                  <span className="text-[40px] leading-none">☰</span>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl leading-none"
                    aria-label="Close menu"
                  >
                    ×
                  </button>
                </div>

                <nav className="flex flex-col">
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex h-[78px] items-center justify-center bg-[#89a80f] text-[24px] text-white transition hover:opacity-95"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/categories"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex h-[78px] items-center justify-center bg-[#134f9c] text-[24px] text-white transition hover:opacity-95"
                  >
                    Categories
                  </Link>

                  <Link
                    to="/my-books"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex h-[78px] items-center justify-center bg-[#134f9c] text-[24px] text-white transition hover:opacity-95"
                  >
                    My Books
                  </Link>
                </nav>

                <div className="mt-auto flex justify-center">
                  <button
                    type="button"
                    className="h-[48px] w-[130px] rounded-[8px] bg-[#89a80f] text-[18px] text-black transition hover:brightness-95"
                  >
                    Log Out
                  </button>
                </div>
              </aside>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
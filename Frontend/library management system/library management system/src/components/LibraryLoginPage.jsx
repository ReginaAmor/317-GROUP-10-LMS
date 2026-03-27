import { Link } from "react-router-dom";

export default function LibraryLoginPage() {
  return (
    <div className="min-h-screen bg-[#111111] p-3 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl rounded-sm border border-[#2e7de0] bg-gradient-to-r from-[#0f3e79] via-[#0d4f9e] to-[#1468d7] p-6 sm:p-8 shadow-[0_0_25px_rgba(17,104,215,0.35)]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.85fr] items-stretch">
          <div className="rounded-[26px] bg-[#2a2f3b] shadow-[0_12px_28px_rgba(0,0,0,0.35)] overflow-hidden min-h-[520px] flex flex-col">
            <div className="relative flex-1">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80"
                alt="Books arranged like a tree"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="flex items-center justify-center gap-2 bg-[#d5b98d] py-4">
              <span className="h-3 w-3 rounded-full bg-[#7d0f0f]" />
              <span className="h-3 w-3 rounded-full bg-[#8a6433]/80" />
              <span className="h-3 w-3 rounded-full bg-[#8a6433]/80" />
              <span className="h-3 w-3 rounded-full bg-[#8a6433]/80" />
            </div>
          </div>

          <div className="rounded-[28px] bg-gradient-to-br from-[#17252f] to-[#22343b] px-6 py-8 sm:px-8 sm:py-10 shadow-[0_12px_28px_rgba(0,0,0,0.35)] min-h-[520px] flex flex-col justify-center">
            <div className="mx-auto mb-8 max-w-sm text-center">
              <h1 className="font-serif text-[1.9rem] leading-tight tracking-[0.16em] text-white sm:text-[2.15rem]">
                LIBRARY
                <br />
                MANAGEMENT SYSTEM
              </h1>
            </div>

            <form className="mx-auto flex w-full max-w-sm flex-col gap-6">
              <input
                type="text"
                placeholder="Username"
                className="h-16 w-full rounded-md border-none bg-[#c9d0dc] px-6 text-[1.45rem] text-[#1f2328] placeholder:text-[#1f2328] shadow-[0_8px_18px_rgba(0,0,0,0.25)] outline-none transition focus:ring-4 focus:ring-blue-400/30"
              />

              <input
                type="password"
                placeholder="Password"
                className="h-16 w-full rounded-md border-none bg-[#c9d0dc] px-6 text-[1.45rem] text-[#1f2328] placeholder:text-[#1f2328] shadow-[0_8px_18px_rgba(0,0,0,0.25)] outline-none transition focus:ring-4 focus:ring-blue-400/30"
              />

              <label className="mt-1 flex items-center gap-3 text-lg font-semibold text-white">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border border-slate-300 accent-blue-600"
                />
                <span>Remember Me</span>
              </label>

              <button
                type="submit"
                className="mt-2 h-14 rounded-md bg-[#0e4c99] text-xl font-medium text-white shadow-[0_10px_18px_rgba(0,0,0,0.25)] transition hover:bg-[#0c4389] active:scale-[0.99]"
              >
                Login
              </button>

              <p className="pt-2 text-center text-lg italic text-white/95">
                Don&apos;t have an account ?{" "}
                <Link to="/signup" className="font-semibold not-italic">
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
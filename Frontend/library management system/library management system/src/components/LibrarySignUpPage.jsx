import { Link } from "react-router-dom";

export default function LibrarySignUpPage() {
  return (
    <div className="min-h-screen bg-[#111111] p-3 sm:p-6 flex items-center justify-center overflow-hidden">

      <div className="w-full max-w-6xl rounded-sm border border-[#2e7de0] bg-gradient-to-r from-[#0f3e79] via-[#0d4f9e] to-[#1468d7] p-6 shadow-[0_0_25px_rgba(17,104,215,0.35)]">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-6 items-stretch">

          {/* LEFT IMAGE (same as login) */}
          <div className="rounded-[26px] bg-black overflow-hidden min-h-[520px] flex flex-col">
            <div className="relative flex-1">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80"
                alt="Book"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="flex items-center justify-center gap-2 py-3">
              <span className="h-3 w-3 rounded-full bg-white" />
              <span className="h-3 w-3 rounded-full bg-[#7d5b5b]" />
              <span className="h-3 w-3 rounded-full bg-[#7d5b5b]" />
            </div>
          </div>

          {/* RIGHT FORM (same size as login, tighter spacing) */}
          <div className="rounded-[28px] bg-gradient-to-br from-[#17252f] to-[#22343b] px-6 py-6 shadow-[0_12px_28px_rgba(0,0,0,0.35)] min-h-[520px] flex flex-col justify-center">

            <div className="mx-auto mb-6 w-full max-w-sm">
              <h1 className="text-center font-serif text-[1.8rem] tracking-[0.14em] text-white leading-tight">
                LIBRARY <br /> MANAGEMENT SYSTEM
              </h1>

              <p className="mt-6 text-[1.5rem] text-white">
                Create an Account
              </p>
            </div>

            <form className="mx-auto flex w-full max-w-sm flex-col gap-4">

              <input
                type="text"
                placeholder="Username"
                className="h-12 w-full rounded-md bg-[#c9d0dc] px-4 text-base outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="h-12 w-full rounded-md bg-[#c9d0dc] px-4 text-base outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="h-12 w-full rounded-md bg-[#c9d0dc] px-4 text-base outline-none focus:ring-2 focus:ring-blue-400"
              />

              <label className="flex items-center gap-2 text-sm text-white">
                <input type="checkbox" className="accent-blue-600" />
                Remember Me
              </label>

              <button
                type="submit"
                className="h-12 bg-[#0e4c99] text-white rounded-md text-lg hover:bg-[#0c4389]"
              >
                Register
              </button>

              <p className="text-center text-sm text-white">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold">
                  Login
                </Link>
              </p>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
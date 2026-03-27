import { Link } from "react-router-dom";

const categories = [
  "Physics",
  "Psychology",
  "Fantasy",
  "Thriller",
  "Horror",
  "Mathematics",
  "Law",
  "Artificial Intelligence",
  "Romance",
  "Audiobooks",
  "Children’s Books",
  "Business & Money",
];

export default function LibraryCategoriesPage() {
  return (
    <div className="min-h-screen bg-[#1b1b1b] px-4 py-4">
      <div className="mx-auto max-w-md">
        <p className="mb-3 text-[18px] text-[#6d6d6d]">Categories</p>

        <div className="w-full bg-gradient-to-b from-[#bdd8f8] via-[#62a1ef] to-[#0a72f3] px-4 py-5">
          <div className="mb-8 flex items-center gap-3">
            <Link to="/" className="text-[44px] text-black">
              →
            </Link>
            <h1 className="text-[28px] text-black">Categories</h1>
          </div>

          <div className="space-y-4">
            {categories.map((cat) => (
              <p
                key={cat}
                className={`text-[22px] ${
                  cat === "Thriller"
                    ? "bg-[#d5ee63] px-3 py-1 w-[170px]"
                    : ""
                }`}
              >
                {cat}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
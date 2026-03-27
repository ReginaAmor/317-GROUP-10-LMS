export default function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-[#1b1b1b] flex items-center justify-center px-4">
      <div className="rounded-xl bg-white px-8 py-6 text-center shadow-lg">
        <h1 className="text-3xl">{title}</h1>
      </div>
    </div>
  );
}
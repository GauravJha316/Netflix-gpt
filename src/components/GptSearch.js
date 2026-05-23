import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-black text-white">
      {/* Background Image */}
      <div className="fixed inset-0 -z-20">
        <img
          className="h-full w-full object-cover scale-105"
          src={BG_URL}
          alt="background"
        />
      </div>

      {/* Dark Cinematic Overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/90 via-black/65 to-black/95" />

      {/* Red Glow */}
      <div className="fixed top-[-120px] left-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-red-700/40 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen px-4 py-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Hero Heading */}
          <div className="pt-20 text-center md:pt-28">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
              AI Movie Assistant
            </p>

            <h1 className="mx-auto max-w-4xl bg-gradient-to-r from-white via-gray-200 to-red-300 bg-clip-text text-4xl font-black leading-tight text-transparent md:text-6xl lg:text-7xl">
              Discover your next obsession
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-300 md:text-lg">
              Tell Gemini your mood, genre, actor, or vibe — and get instant
              movie recommendations powered by AI.
            </p>
          </div>

          {/* Search Glass Card */}
          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-red-950/40 backdrop-blur-xl md:p-6">
            <GptSearchBar />
          </div>

          {/* Suggestions */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-black/50 p-3 shadow-2xl backdrop-blur-xl md:p-6">
            <GptMovieSuggestion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
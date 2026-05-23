import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="mb-8">
      <h1 className="mb-3 text-lg font-bold text-white sm:text-xl md:text-2xl">
        {title}
      </h1>

      <div className="overflow-x-auto overflow-y-visible no-scrollbar pb-6">
        <div className="flex gap-3 sm:gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
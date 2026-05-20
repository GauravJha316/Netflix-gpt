import MovieCard from "./MovieCard";

const MovieList=({title, movies})=>{
    if (!movies) return null;
    
    return (
          <div className="px-6">
            <h1 className="text-2xl font-bold  text-white py-4">{title}</h1>

            <div className="flex overflow-x-scroll no-scrollbar">
               
                <div className="flex gap-4">
                    {movies?.map((movies)=><MovieCard key={movies.id} posterPath={movies.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList;
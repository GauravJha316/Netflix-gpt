import GptSearch from "./GptSearch";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () =>{
  const {movieResults, movieNames} = useSelector((store)=> store.gpt);

  if (!movieNames || !movieResults) return null;

  return (
    <div className="p-4 m-4 bg-black">
      <div>
        {movieNames.map((movieName,index)=>(
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestion;

// import GptSearch from "./GptSearch";
// import MovieList from "./MovieList";
// import { useSelector } from "react-redux";
// const GptMovieSuggestion = () =>{
//     const  {movieResults, movieNames} = useSelector((store)=> store.gpt);
    
//     if (!movieNames || !movieResults) return null;
//     return  <div className="mx-2 my-4 rounded-2xl bg-black/80 p-3 backdrop-blur-md sm:mx-4 sm:p-4 md:mx-8 md:p-6">
//       <div className="space-y-5 sm:space-y-7 md:space-y-8">
//         {movieNames.map((movieName,index)=>(
//             <MovieList key={movieName} title={movieName} movies={movieResults[index]}
//             />
//         ))}
//        </div>
//     </div>
// }

// export default GptMovieSuggestion;
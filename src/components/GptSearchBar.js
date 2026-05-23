import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant"
import { useRef } from "react";
import {API_OPTIONS} from "../utils/constants"
import { addGptMovieResult } from "../utils/gptSlice";
import genAI from "../utils/gemini";

const GptSearchBar = () => {
  const dispatch=useDispatch();
  const langKey= useSelector((store)=>store.config.lang)
  const searchText=useRef(null);

const searchMovieTMDB = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      encodeURIComponent(movie) +
      "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
  );

  const json = await data.json();

  return json.results;
};

const handleGptSearchClick = async (e) => {
  e.preventDefault();

  const userQuery = searchText.current.value;

  const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query " +
    userQuery +
    ". Only give me names of 5 movies, comma separated like this example: Gadar, Sholay, Don, Hum Tum, Heropanti";

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = response.text();
    const gptMovies = text
      .split(",")
      .map((movie) => movie.trim())
      .filter((movie) => movie.length > 0);

        console.log(gptMovies);
    console.log(gptMovies);
    
    console.log(text);

    const promiseArray= gptMovies.map(movie =>searchMovieTMDB(movie))

    const tmdbResults=await Promise.all(promiseArray)
    console.log(tmdbResults)

    dispatch(addGptMovieResult({movieName:gptMovies, movieResults:tmdbResults}))
  } catch (error) {
    console.error("Gemini API Error:", error);
  }
};  
return (
      <div className="flex justify-center">
    <form
      className="flex w-full max-w-2xl items-center gap-4 rounded-2xl bg-black/80 p-3"
      onSubmit={handleGptSearchClick}
    >
      <input
        ref={searchText}
        type="text"
        className="flex-1 rounded-xl border border-white/10 bg-white px-5 py-4 text-black caret-black outline-none placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />

      <button className="rounded-lg bg-red-700 px-6 py-4 font-semibold text-white hover:bg-red-800">
        {lang[langKey].search}
      </button>
    </form>
  </div>
);

};

export default GptSearchBar;
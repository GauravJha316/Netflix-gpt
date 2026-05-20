import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch=()=>{
    return (
        <div>GPT Search Bar
        <div className="absolute -z-10">
          <img
            className="w-full h-screen object-cover"
            src={BG_URL}
            alt="logo"
          />
        </div>
              <GptSearchBar/>
              <GptMovieSuggestion/>
        </div>
      
    )
};

export default GptSearch;
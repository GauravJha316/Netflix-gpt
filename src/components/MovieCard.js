import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="group w-32 shrink-0 cursor-pointer overflow-hidden rounded-lg bg-zinc-900 shadow-lg transition-all duration-300 hover:z-20 hover:scale-110 sm:w-36 md:w-44 lg:w-48">
      <img
        className="h-48 w-full object-cover transition duration-300 group-hover:brightness-110 sm:h-56 md:h-64 lg:h-72"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
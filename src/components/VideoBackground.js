import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground=({movieId})=>{
    useMovieTrailer(movieId)
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
        console.log("trailerVideo", trailerVideo);
        console.log("youtube key", trailerVideo?.key);
    return ( 
    <div className="w-screen">
        <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

    </div>
    
    );
}

export default VideoBackground;

// import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";

// const VideoBackground = ({ movieId }) => {
//   useMovieTrailer(movieId);

//   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

//   return (
//     <div className="w-screen aspect-video">
//       <iframe
//         className="w-screen aspect-video"
//         src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&loop=1&controls=0&playlist=" + trailerVideo?.key}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//       ></iframe>
//     </div>
//   );
// };

// export default VideoBackground;
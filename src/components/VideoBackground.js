
const VideoBackground=({movieId})=>{

    const getMovieVideos= async ()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/1439930/videos?language=en-US")
    }
    return <div>
        Secondary Container
    </div>
}

export default VideoBackground;
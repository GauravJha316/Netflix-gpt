const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold max-w-2xl">
        {title}
      </h1>

      <p className="py-6 text-lg w-1/3 leading-relaxed">
        {overview}
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-80 transition">
          ▶ Play
        </button>

        <button className="bg-gray-500 bg-opacity-70 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-50 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
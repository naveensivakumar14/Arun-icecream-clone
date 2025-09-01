import React, { useState } from "react";

const Media = () => {
  // Video data (you can add more later)
  const videos = [
    {
      id: 1,
      title: "Arun Icecreams kids",
      thumbnail: "https://img.youtube.com/vi/cvKU_-7Y15s/mqdefault.jpg",
      url: "https://www.youtube.com/embed/cvKU_-7Y15s?si=SKPrcmrQLMslmdiV",
    },
    {
      id: 2,
      title: "Arun Icecreams Shakes",
      thumbnail: "https://img.youtube.com/vi/Ux9_9jSIJd4/mqdefault.jpg",
      url: "https://youtube.com/embed/Ux9_9jSIJd4?si=mMkfGQxZpNSQhm25",
    },
    {
      id: 3,
      title: "Arun Ibar",
      thumbnail: "https://img.youtube.com/vi/GjKRQArmAvU/mqdefault.jpg",
      url: "https://youtube.com/embed/GjKRQArmAvU?si=wViY9EywId0YNgkR",
    },
  ];

  // Default main video
  const [mainVideo, setMainVideo] = useState(videos[0]);

  return (
    <div className="flex flex-col items-center justify-center md:px-4 py-20 px-10 bg-white">
      {/* Heading */}
      <h2 className="md:text-3xl text-red-600 text-xl font-bold mb-10 text-center">
        Watch Our Story
      </h2>

      {/* Main Video Player */}
      <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg mb-10">
        <iframe
          className="w-full h-full"
          src={mainVideo.url}
          title={mainVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Thumbnails Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setMainVideo(video)}
            className="cursor-pointer group"
          >
            <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-40 object-cover"
              />
            </div>
            <h3 className="mt-2 text-center font-medium text-gray-700 group-hover:text-red-500">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;

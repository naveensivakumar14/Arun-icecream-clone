import React from "react";

function Videosection(){
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white">
          <h2 className="md:text-3xl text-xl font-bold mb-8 text-center text-red-500">Watch Our Story</h2>
          <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">

            <iframe className="w-full h-full" src="https://www.youtube.com/embed/cvKU_-7Y15s?si=SKPrcmrQLMslmdiV" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
        </div>
      );

}

export default Videosection
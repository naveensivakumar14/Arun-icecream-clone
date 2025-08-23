import React from "react";

function Videosection(){
    return (
        <div className="flex flex-col items-center justify-center py-20 bg-white">
          
          <h2 className="md:text-3xl text-red-600 text-xl font-bold md:mb-16 text-center ">Watch Our Story</h2>
          <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg">

            <iframe className="w-full h-full" src="https://www.youtube.com/embed/cvKU_-7Y15s?si=SKPrcmrQLMslmdiV" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
        </div>
      );

}

export default Videosection
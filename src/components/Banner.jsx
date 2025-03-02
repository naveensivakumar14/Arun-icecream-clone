import React, { useState, useEffect } from "react";
import bIbar from "../assets/images/banner-ibar.jpg";
import bIcone from "../assets/images/banner-icone.jpg";
import btubs from "../assets/images/banner-tubs.jpg";
import bSand from "../assets/images/banner-sandwich.jpg";

const slides = [
  {
    id: 1,
    title: "Ibar",
    img: bIbar,
  },
  {
    id: 2,
    title: "Icones",
    img: bIcone,
  },
  {
    id: 3,
    title: "Tubs",
    img: btubs,
  },
  {
    id: 4,
    title: "Sandwich",
    img: bSand,
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-44 md:h-[90vh] md:px-2  md:py-6 overflow-hidden rounded-lg shadow-lg">
      {/* Slide Content */}
      <div
        className="w-auto h-full flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentIndex].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       
      </div>
    </div>
  );
}

export default Slider;

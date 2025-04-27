import React from "react";

const flavors = [
  { emoji: "🍊", name: "Orange" },
  { emoji: "🍋", name: "Lemon" },
  { emoji: "🍈", name: "Melon" },
  { emoji: "🍑", name: "Peach" },
  { emoji: "🍍", name: "Pineapple" },
  { emoji: "🍓", name: "Strawberry" },
  { emoji: "🍒", name: "Cherry" },
];

function FlavorSlider() {
  return (
    <div className="bg-[#FFC1DA] py-4 overflow-hidden relative md:w-[80%] w-full mx-auto shadow-md ">
      <div className="flex animate-scroll md:gap-6 gap-2">
        {flavors.map((flavor, index) => (
          <div
            key={index}
            className="bg-white flex items-center gap-2 md:px-4 md:py-2 px-2 py-1  rounded-md shadow-md md:text-lg md:font-bold text-xs"
          >
            <span>{flavor.emoji}</span>
            <span>{flavor.name}</span>
          </div>
        ))}

        {/* Repeat the same for infinite scroll effect */}
        {flavors.map((flavor, index) => (
          <div
            key={index + flavors.length}
            className="bg-white flex items-center gap-2 md:px-4 md:py-2 px-2 py-1 rounded-md shadow-md md:text-lg md:font-bold text-xs "
          >
            <span>{flavor.emoji}</span>
            <span>{flavor.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlavorSlider;

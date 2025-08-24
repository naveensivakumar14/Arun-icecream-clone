import React, { useState } from 'react';

import banner from "../assets/images/profile-banner2.jpg"

// Images
// Bars
import ibar1 from "../assets/images/chocobar.jpg";
import ibar2 from "../assets/images/choco-vannila.jpg";
import ibar3 from "../assets/images/almond-crunch.jpg";
import ibar4 from "../assets/images/lickstick-grape.jpg";
import ibar5 from "../assets/images/lickstick-orange.jpg";
import ibar6 from "../assets/images/dual-mango.jpg";



// Cups
import icup1 from '../assets/images/cup-vannella.jpg';
import icup2 from '../assets/images/cup-bscotch.jpg';
import icup3 from '../assets/images/cup-strwberry.jpg';
import icup4 from '../assets/images/cup-chocolate.jpg';
import byte1 from '../assets/images/byte1.jpg'
import byte2 from '../assets/images/byte2.jpg'



// Cones
import icone1 from '../assets/images/icone-blackcurrent.jpg';
import icone2 from '../assets/images/icone-butterscotch.jpg';
import icone3 from '../assets/images/icone-strawbery.jpg';
import icone4 from '../assets/images/icone-vannila.jpg';
import icone5 from '../assets/images/icone-chocolate.jpg';
import icone6 from '../assets/images/icone-belgion.jpg';

// Kids
import kids1 from '../assets/images/triple-fruit.jpg';
import kids2 from '../assets/images/yummy-bear.jpg';
import kids3 from '../assets/images/spiral-mango.jpg';
import kids4 from '../assets/images/jolly-train.jpg';
import kids5 from '../assets/images/lickstick-circle.jpg';
import kids6 from '../assets/images/spiral-strawberry.jpg'

const imageData = {
  Bars: [ibar1, ibar2, ibar3, ibar4, ibar5, ibar6],
  Cups: [icup1, icup2, icup3, icup4, byte1, byte2],
  Cones: [icone1, icone2, icone3, icone4, icone5, icone6],
  Kids: [kids1, kids2, kids3, kids4, kids5, kids6],
};

const Products = () => {
  const categories = Object.keys(imageData);

  const [selectedCategory, setSelectedCategory] = useState("Bars");
  const [selectedImage, setSelectedImage] = useState(imageData["Bars"][0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedImage(imageData[category][0]); // Reset to first image of selected category
  };

  return (
    <div className="flex flex-col items-center justify-center">

      <div className='w-full md:h-[80vh] my-4 flex justify-center items-center'>
      <div className='w-[600px] hidden md:block'>  
          <h1 className='text-red-500 text-2xl font-bold'>Hello</h1>
          <p className='py-4'>
              Discover a wide range of Arun Ice Creams crafted to delight every taste bud. From crunchy bars and creamy cups to cones and fun kids’ specials, there’s something for everyone. Each product is made with rich flavors and premium quality ingredients. Indulge in the joy of Arun Ice Cream – where happiness meets every scoop!
          </p>
      </div>
      
      <div className="m-1 md:w-1/2 flex justify-center">
          <img className="md:w-[600px] w-full" src={banner} alt="banner-image" />
      </div>
      </div>

      
     
      <h1 className='md:text-3xl font-bold text-red-600 py-6'>Categories</h1>
      {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 md:py-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`inline-flex font-medium text-sm rounded-md py-2 px-4 shadow-sm transition-all duration-300 ease-in 
                ${selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-transparent border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white'}`}>
                  {category}
            </button>
          ))}
        </div>

      {/* Image Display Section */}
      <div className="grid gap-4 w-3/4 p-6">
        {/* Main Selected Image */}
        <div className="flex justify-center items-center">
          <img
            className="h-auto max-w-full rounded-lg border"
            src={selectedImage}
            alt="Selected Product"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 py-10">
          {imageData[selectedCategory].map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="cursor-pointer "
            >
              <img
                className={`h-auto max-w-full rounded-md border-2  ${
                  selectedImage === img
                    ? 'border-green-600'
                    : 'border-gray-300'
                }`}
                src={img}
                alt={`Product ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Products;

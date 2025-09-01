import React, { useState } from "react";
import productData from "../productsData/productData"; // import your product data
import banner from "../assets/images/profile-banner2.jpg";

const Products = () => {
  const categories = Object.keys(productData);

  // initial state → first product of Bars category
  const [selectedCategory, setSelectedCategory] = useState("Bars");
  const [selectedProduct, setSelectedProduct] = useState(
    productData["Bars"][0]
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(productData[category][0]); // reset to first product of new category
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Banner Section */}
      <div className="w-full md:h-[80vh] my-4 flex justify-center items-center">
        <div className="w-[600px] hidden md:block">
          <h1 className="text-red-500 text-2xl font-bold">Hello</h1>
          <p className="py-4">
            Discover a wide range of Arun Ice Creams crafted to delight every
            taste bud. From crunchy bars and creamy cups to cones and fun kids’
            specials, there’s something for everyone. Each product is made with
            rich flavors and premium quality ingredients. Indulge in the joy of
            Arun Ice Cream – where happiness meets every scoop!
          </p>
        </div>

        <div className="m-1 md:w-1/2 flex justify-center">
          <img
            className="md:w-[600px] w-full"
            src={banner}
            alt="banner-image"
          />
        </div>
      </div>

      {/* Categories */}
      <h1 className="md:text-3xl font-bold text-red-600 py-6">Categories</h1>
      <div className="flex flex-wrap gap-3 md:py-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`inline-flex font-medium text-sm rounded-md py-2 px-4 shadow-sm transition-all duration-300 ease-in 
              ${
                selectedCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-transparent border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Display */}
      <div className="grid gap-6 w-[80%] p-6 my-2 md:my-10">
        {/* Main Product */}
        <div className="flex flex-col  md:flex-row items-center justify-center gap-6">
          {/* Image */}
          <div className="flex justify-center items-center w-1/2">
            <img
              className="h-[100px] md:h-auto max-w-full rounded-lg border"
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/4 flex flex-col justify-center border rounded-md p-3 md:p-6 shadow-sm my-2 md:my-10">
            <h2 className="text-xs md:text-xl font-semibold md:font-bold text-gray-800">
              {selectedProduct.name}
            </h2>
            <p className="text-sm md:text-lg text-red-600 font-semibold mt-2">
              ₹{selectedProduct.price}
            </p>
            <button className="md:mt-4 mt-1 w-auto bg-green-600 hover:bg-green-700 text-xs md:text-lg text-white py-2 px-2 rounded-md transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-10">
          {productData[selectedCategory].map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer"
            >
              <img
                className={`h-auto max-w-full rounded-md border-2 ${
                  selectedProduct.id === product.id
                    ? "border-green-600"
                    : "border-gray-300"
                }`}
                src={product.image}
                alt={product.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

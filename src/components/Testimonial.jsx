import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Angela",
    title: "Icecream Lover",
    comment: "The strawberry flavor is so fresh and creamy! Arun Icecreams never disappoints me!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Rahul",
    title: "Food Blogger",
    comment: "Butterscotch with crunchy bits was a nostalgic treat! Loved the texture and sweetness.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Nancy",
    title: "Dessert Fanatic",
    comment: "The vanilla scoop was heavenly. Tastes just like old-school charm with a modern twist!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <div className="max-w-xl mx-auto text-center space-y-6 py-10 px-6 md:py-20 rounded-xl transition-all duration-500">

      

     <h2 className="md:text-2xl font-bold">Our Every Scoop Has a Story</h2>
      {/* Decorative Quote Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-pink-500 mx-auto" viewBox="0 0 35 30" fill="none">
        <path d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z" />
      </svg>

      {/* Testimonial Text */}
      <p className="text-sm md:text-xl leading-relaxed text-gray-700">
        "{current.comment}"
      </p>

      {/* Customer Info */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <img
          src={current.img}
          alt={current.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-red-400"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">{current.name}</p>
          <p className="text-xs text-gray-500">{current.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

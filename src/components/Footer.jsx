import React from "react";
import logo from "../assets/images/Logo.png"; // Update path as per your structure

function Footer() {
  return (
    <footer className="bg-[#FFC1DA] text-black py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Arun Icecream Logo" className="w-24 mb-4" />
          <h2 className="text-xl font-bold text-red-500">Arun Icecreams</h2>
          <p className="text-sm mt-2">Taste the Magic, One Scoop at a Time!</p>
        </div>

        {/* Address */}
        <div className="text-center md:text-left ">
          <h3 className="font-bold text-lg mb-2">Address</h3>
          <p>Arun Icecreams HQ</p>
          <p>123 Icecream Street,</p>
          <p>Chennai, Tamil Nadu - 600001</p>
          <p>Phone: +91 98765 98675</p>
        </div>

        {/* Services / Links */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg mb-2">Our Services</h3>
          <ul className="space-y-1">
            <li>🍦 Icecream Catering</li>
            <li>🎉 Party Packs</li>
            <li>🚚 Online Delivery</li>
            <li>🏪 Franchise Inquiries</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center  text-gray-700 border-t pt-4">
        &copy; {new Date().getFullYear()} Arun Icecreams. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

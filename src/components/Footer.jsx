import React from "react";
import logo from "../assets/images/Logo.png"; // Update path as per your structure

function Footer() {
  return (
    <footer className="bg-[#dddd] text-black py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Arun Icecream Logo" className="w-24 mb-4" />
          <p className="font-semibold text-lg mt-2">Taste the Magic !</p>
        </div>

        {/* Address */}
        <div className="text-center md:text-left ">
          <h3 className="font-bold md:text-lg mb-2">Address</h3>
          <p className="md:text-md text-sm">Arun Icecreams HQ</p>
          <p className="md:text-md text-sm">123 Icecream Street,</p>
          <p  className="md:text-md text-sm">Chennai, Tamil Nadu - 600001</p>
          <p  className="md:text-md text-sm">Phone: +91 98765 98675</p>
        </div>

        {/* Services / Links */}
        <div className="text-center md:text-left">
          <h3 className="font-bold md:text-lg mb-2">Our Services</h3>
          <ul className="space-y-1 md:text-md text-sm">
            <li>🍦 Icecream Catering</li>
            <li>🎉 Party Packs</li>
            <li>🚚 Online Delivery</li>
            <li>🏪 Franchise Inquiries</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center  text-gray-700 border-t pt-4">
        &copy; {new Date().getFullYear()} Arun Icecreams.
      </div>
    </footer>
  );
}

export default Footer;

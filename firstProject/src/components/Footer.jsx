import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
        

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-sm text-gray-400">
          <p className="text-center">© {new Date().getFullYear()} React Essentials. All rights reserved. | Designed by Sahil Shrestha</p>
      </div>
    </footer>
  );
};

export default Footer;

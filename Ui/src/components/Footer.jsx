import React from "react";
import "../index.css";

function Footer() {
  return (
    <footer className="w-full bg-gray-200 py-6 sm:py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base text-gray-700">
            &copy; 2025 StorePRO. All rights reserved | Sereywat.
          </p>
          <div className="flex items-center space-x-4 text-sm sm:text-base">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              😊
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="https://github.com/SereywatPro?tab=overview&from=2024-12-01&to=2024-12-31"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

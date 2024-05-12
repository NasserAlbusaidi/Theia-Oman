import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">

        {/* Location */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <img src="/images/map-image.jpg" alt="Location Map" className="w-full md:w-64 rounded-md" />
          <p className="text-sm mt-2">Oman <br/> Muscat, Boushar</p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="space-y-2"> {/* Changed to space-y-2 for vertical spacing */}
            <a href="https://www.linkedin.com/company/theia-oman/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <i className="fab fa-linkedin text-2xl mr-2"></i> Theia Oman
            </a>
            <a href="https://theia.om" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <i className="fas fa-globe text-2xl mr-2"></i> theia.om
            </a>
            <a href="mailto:theia.om24@gmail.com" className="flex items-center">
              <i className="fas fa-envelope text-2xl mr-2"></i> theia.om24@gmail.com
            </a>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-sm">
        <p>Theia Copyright 2024 | Muscat, Oman</p>
      </div>
    </footer>
  );
}

export default Footer;

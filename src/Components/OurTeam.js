import React from "react";
import { faLinkedin, faWpressr, faDyalog } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function OurTeam() {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Saba Al Rashdi
            </h3>
            <p className="text-gray-500">Co-Founder</p>
            <p className="text-gray-600 mt-2">
              Design Thinking and Business Development
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Fatma Al Akhzami
            </h3>
            <p className="text-gray-500">Co-Founder</p>
            <p className="text-gray-600 mt-2">Media and Project Management</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
          <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
          <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between py-8 px-4 md:px-8 lg:px-16">
          {/* Location */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Location
            </h3>
            <img
              src="/images/location.png"
              alt="Location Map"
              className="w-full md:w-64 rounded-md"
            />
          </div>

          
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Contact Us
            </h3>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/company/theia-oman/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
               <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                Theia Oman
              </a>
              <a
                href="https://theia.om"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FontAwesomeIcon icon={faWpressr} className="mr-2" />
                 theia.om
              </a>
              <a
                href="mailto:theia.om24@gmail.com"
                className="flex items-center"
              >
                <FontAwesomeIcon icon={faDyalog } className ="mr-2" />
                theia.om24@gmail.com
              </a>
            </div>
          </div>
        </div>
        {/* solid line */}
        <div className="border-t border-gray-300 mt-8"></div>

        {/* copyright section */}
        <div className="mt-8 text-left text-sm">
          <p>Theia © 2024 | Muscat, Oman</p>
          </div>
      </div>
    </section>
  );
}

export default OurTeam;

import { useRef, useState } from "react";
import "./App.css";

import {
  faLinkedin,
  faDyalog,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const homeRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const whyUsRef = useRef(null);
  const ourTeamRef = useRef(null);
  const locationRef = useRef(null);
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
    ref.current.focus();
    document.body.focus();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  return (
    <div ref={homeRef} id="home" className="relative">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10 flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <img
          src="/images/logo.png"
          alt="Your Logo"
          className="h-12 w-auto mr-24 ml-24"
        />
      </div>
      <div className="flex items-start ml-auto">
        {/* Hamburger menu for small screens */}
        <button
          className="text-black px-4 py-1 rounded-r h-3 w-12 sm:hidden"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faDyalog} />
        </button>
        <ul
          className={`${
            isMenuOpen ? "flex flex-col space-y-4" : "hidden"
          } sm:flex sm:space-x-16`}
        >
          <li className="font-semibold">
            <p
              className="text-gray-800 hover:text-blue-500 active:underline cursor-pointer"
              onClick={scrollToSection.bind(this, homeRef)}
            >
              Home
            </p>
          </li>
          <li className="font-semibold mr-3">
            <p
              className="text-gray-800 hover:text-blue-500 cursor-pointer"
              onClick={scrollToSection.bind(this, whatWeDoRef)}
            >
              Services
            </p>
          </li>
          <li className="font-semibold">
            <p
              className="text-gray-800 hover:text-blue-500 cursor-pointer"
              onClick={scrollToSection.bind(this, whyUsRef)}
            >
              Why Us
            </p>
          </li>
          <li className="font-semibold">
            <p
              className="text-gray-800 hover:text-blue-500 active:underline cursor-pointer"
              onClick={scrollToSection.bind(this, ourTeamRef)}
            >
              Team
            </p>
          </li>
          <li className="font-semibold">
            <p
              className="text-gray-800 hover:text-blue-500 cursor-pointer"
              onClick={scrollToSection.bind(this, locationRef)}
            >
              Contact
            </p>
          </li>
          {/* Search icon */}
          <li className="font-semibold hidden sm:block">
            <button className=" text-black px-4 py-1 rounded-r h-3 w-12">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>

      <div className="pt-4 flex flex-col md:flex-row justify-center items-center text-white bg-gray-200">
        <div className="w-full md:w-1/2 p-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800">
            Inventory <br /> Management <br /> Application
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mt-4">
            Your Supply Chain, Optimized
          </p>
        </div>
        <div className="w-full md:w-1/2 pb-2">
          <img
            src="/images/inventory.jpg"
            alt="Header"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <section
        className="bg-white py-12 px-4 md:px-8 lg:px-16"
        ref={whatWeDoRef}
        id="whatWeDo"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-right p-8">
            <img
              src="/images/icon.png"
              alt="Feature Icon"
              className="w-45 h-45 mx-auto mb-4 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl md:text-4xl text-blue-800 mb-8 font-bold text-center md:text-left">
              What We Do?
            </h2>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start">
                <svg
                  className="h-6 w-6 text-blue-500 mr-2 md:mr-4 md:ml-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17V7m0 10l3-3m-3 3l3-3m-6-3h12"
                  ></path>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Purchase Order Management
                  </h3>
                  <p className="text-gray-600">
                    Our inventory management application offers a streamlined
                    Purchase Order System tailored for health sectors, including
                    small clinics, dental clinics, and pharmacies. With both
                    internal and external Purchase Order Management, users can
                    effortlessly place, monitor, and receive orders, simplifying
                    the procurement process and ensuring seamless inventory
                    replenishment.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start">
                <svg
                  className="h-6 w-6 text-blue-500 mr-2 md:mr-4 md:ml-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17V7m0 10l3-3m-3 3l3-3m-6-3h12"
                  ></path>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Inventory Management
                  </h3>
                  <p className="text-gray-600">
                    Our inventory management feature simplifies operations for
                    health sector businesses like small clinics, dental clinics,
                    and pharmacies. It includes digital tools for receiving
                    items, locating orders, transferring products, and managing
                    returns—all with barcode support. In addition, it offers
                    predictive demand forecasting for smarter purchasing
                    decisions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start">
                <svg
                  className="h-6 w-6 text-blue-500 mr-2 md:mr-4 md:ml-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17V7m0 10l3-3m-3 3l3-3m-6-3h12"
                  ></path>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Data Analysis and Viewing Insights
                  </h3>
                  <p className="text-gray-600">
                    Users can leverage powerful analytics tools to gain
                    actionable insights into inventory trends, sales patterns,
                    and purchasing behavior, enabling informed decision making
                    for better business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <img
        src="/images/Frame-1.png"
        alt="Feature"
        className="w-full h-full object-cover"
      />
      <section
        className="pt-6 bg-gray-100 py-12 px-4 md:px-8 lg:px-16"
        ref={whyUsRef}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
          Why Us?
        </h2>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col items-center mb-8">
              <img
                src="/images/easy.png"
                alt="Easy"
                className="w-[250px] h-[250px] mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800 text-center">
                Easy
              </h3>
            </div>
            <div className="flex flex-col items-center mb-8">
              <img
                src="/images/affordable.png"
                alt="Affordable"
                className="w-[250px] h-[250px] mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800 text-center">
                Affordable
              </h3>
            </div>
            <div className="flex flex-col items-center mb-8">
              <img
                src="/images/accurate.png"
                alt="Accurate"
                className="w-[250px] h-[250px] mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800 text-center">
                Accurate
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section
  className="bg-white py-12 px-4 md:px-8 lg:px-16"
  ref={ourTeamRef}
>
  <div className="max-w-screen-xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8 text-center">
      Our Team
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          Saba Al Rashdi
        </h3>
        <p className="text-gray-500">Co-Founder</p>
        <p className="text-gray-600 mt-2">
          Design Thinking and Business Development
        </p>
      </div>
      <div className="text-center">
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
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
          Location
        </h3>
        <img
          src="/images/location.png"
          alt="Location Map"
          className="w-full md:w-64 rounded-md mx-auto md:mx-0"
        />
      </div>

      <div ref={locationRef}>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
          Contact Us
        </h3>
        <div className="space-y-2">
          <a
            href="https://www.linkedin.com/in/theia-oman-828641309"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            Theia Oman
          </a>
          <a
            href="https://instagram.com/theia.om"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start"
          >
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            theia.om
          </a>
          <a
            href="mailto:theia.om24@gmail.com"
            className="flex items-center justify-center md:justify-start"
          >
            <FontAwesomeIcon icon={faDyalog} className="mr-2" />
            theia.om24@gmail.com
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-300 mt-8"></div>

    <div className="mt-8 text-center text-sm">
      <p>Theia © 2024 | Muscat, Oman</p>
    </div>
  </div>
</section>

    </div>
  );
}

export default App;

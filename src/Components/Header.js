import React from "react";

function Header() {
  return (
    <div className="pt-4 flex flex-row justify-center items-center text-white bg-gray-200">
      <div className="w-1/2 p-8 text-center ml-8"> {/* Increased ml to ml-8 */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
          Inventory <br /> Management <br /> Application
        </h1>
        <p className="pt-8 text-lg md:text-xl lg:text-2xl text-gray-500">
          Your Supply chain, Optimized
        </p>
      </div>

      <div className="w-1/2 pb-2">
        <img
          src="/images/inventory.jpg"
          alt="Header"
          className="w-100 h-100 object-cover"
        />
      </div>
    </div>
  );
}

export default Header;

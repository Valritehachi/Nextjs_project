import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-purple-50 w-60 p-6 flex flex-col justify-between border-r-2 border-gray-300">
      <div>
        {/* User Info */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <img
              src="/profile-pic.png"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            {/* <div>
              <p className="font-bold"></p>
              <p className="text-gray-600 text-sm"></p>
            </div> */}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <a href="#" className="block text-lg text-gray-700 font-semibold">
            Overview
          </a>
          <a href="#" className="block text-lg text-gray-700 font-semibold">
            Calorie Calculator
          </a>
          <a href="#" className="block text-lg text-purple-600 font-semibold">
            Food
          </a>
          <a href="#" className="block text-lg text-gray-700 font-semibold">
            History
          </a>
          <a href="#" className="block text-lg text-gray-700 font-semibold">
            Settings
          </a>
        </nav>
      </div>

      {/* Logout Button */}
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
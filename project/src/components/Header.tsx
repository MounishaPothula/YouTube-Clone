import React, { useState } from 'react';
import { Search, Menu, Bell, Video, User, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu size={24} />
          </button>
          <Link to="/" className="flex items-center ml-4">
            <Video className="text-red-600" size={32} />
            <span className="ml-2 text-xl font-semibold">ViewTube</span>
          </Link>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search size={20} className="text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Moon size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
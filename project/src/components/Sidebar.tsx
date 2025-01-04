import React from 'react';
import { Home, Compass, Clock, ThumbsUp, Folder, History, PlaySquare, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <Compass size={20} />, label: 'Explore', path: '/explore' },
    { icon: <Clock size={20} />, label: 'Shorts', path: '/shorts' },
    { icon: <PlaySquare size={20} />, label: 'Subscriptions', path: '/subscriptions' },
    { icon: <Film size={20} />, label: 'Library', path: '/library' },
    { icon: <History size={20} />, label: 'History', path: '/history' },
    { icon: <ThumbsUp size={20} />, label: 'Liked Videos', path: '/liked' },
    { icon: <Folder size={20} />, label: 'Playlists', path: '/playlists' },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-16 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="py-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {item.icon}
            <span className="ml-4">{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Video } from '../types';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  video: Video;
  layout?: 'grid' | 'row';
}

export default function VideoCard({ video, layout = 'grid' }: VideoCardProps) {
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views;
  };

  const cardClass = layout === 'grid' 
    ? 'flex flex-col' 
    : 'flex space-x-4';

  const imageClass = layout === 'grid'
    ? 'w-full aspect-video'
    : 'w-64 aspect-video';

  return (
    <Link to={`/watch/${video.id}`} className={`${cardClass} hover:bg-gray-100 rounded-lg p-2`}>
      <div className={`${imageClass} relative rounded-lg overflow-hidden`}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-sm px-1 rounded">
          {video.duration}
        </span>
      </div>
      
      <div className="flex mt-3">
        <img
          src={video.channel.avatar}
          alt={video.channel.name}
          className="w-9 h-9 rounded-full"
        />
        <div className="ml-3">
          <h3 className="font-medium line-clamp-2">{video.title}</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <span>{video.channel.name}</span>
            {video.channel.verified && (
              <CheckCircle size={14} className="ml-1 text-gray-400" />
            )}
          </div>
          <div className="text-sm text-gray-600">
            {formatViews(video.views)} views • {video.timestamp}
          </div>
        </div>
      </div>
    </Link>
  );
}
import React from 'react';
import VideoCard from '../components/VideoCard';
import { mockVideos } from '../data/mockVideos';

export default function Home() {
  return (
    <div className="pt-16 pl-64">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mockVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
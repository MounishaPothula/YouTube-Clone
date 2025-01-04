import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share, Save, MoreVertical, MessageSquare } from 'lucide-react';
import { Video, Comment } from '../types';

const mockVideo: Video = {
  id: '1',
  title: 'Building a Modern Web Application',
  thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  channel: {
    name: 'TechChannel',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    verified: true
  },
  views: 1200000,
  timestamp: '2 days ago',
  duration: '12:34'
};

const mockComments: Comment[] = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36'
    },
    content: 'Great video! Very informative.',
    likes: 245,
    timestamp: '2 days ago'
  },
  // Add more mock comments
];

export default function Watch() {
  const { id } = useParams();
  const [comment, setComment] = useState('');

  return (
    <div className="pt-16 pl-64">
      <div className="grid grid-cols-3 gap-6 p-6">
        <div className="col-span-2">
          <div className="aspect-video bg-black rounded-lg">
            {/* Video player would go here */}
          </div>
          
          <div className="mt-4">
            <h1 className="text-xl font-bold">{mockVideo.title}</h1>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <img
                  src={mockVideo.channel.avatar}
                  alt={mockVideo.channel.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <h3 className="font-medium">{mockVideo.channel.name}</h3>
                  <p className="text-sm text-gray-600">1.2M subscribers</p>
                </div>
                <button className="ml-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                  Subscribe
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <ThumbsUp size={20} />
                  <span>123K</span>
                </button>
                <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <ThumbsDown size={20} />
                </button>
                <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <Share size={20} />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <Save size={20} />
                  <span>Save</span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Comments</h3>
              <span className="text-gray-600">{mockComments.length} comments</span>
            </div>
            
            <div className="flex items-start space-x-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                alt="Your avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full px-4 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {mockComments.map((comment) => (
                <div key={comment.id} className="flex space-x-4">
                  <img
                    src={comment.user.avatar}
                    alt={comment.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{comment.user.name}</span>
                      <span className="text-sm text-gray-600">{comment.timestamp}</span>
                    </div>
                    <p className="mt-1">{comment.content}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <button className="flex items-center space-x-1">
                        <ThumbsUp size={16} />
                        <span>{comment.likes}</span>
                      </button>
                      <button>
                        <ThumbsDown size={16} />
                      </button>
                      <button className="text-sm font-medium">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Recommended videos would go here */}
          <h3 className="text-lg font-bold">Recommended Videos</h3>
          {Array(5).fill(mockVideo).map((video, index) => (
            <VideoCard key={index} video={video} layout="row" />
          ))}
        </div>
      </div>
    </div>
  );
}
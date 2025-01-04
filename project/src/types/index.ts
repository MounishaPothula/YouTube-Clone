export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  views: number;
  timestamp: string;
  duration: string;
}

export interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  likes: number;
  timestamp: string;
}
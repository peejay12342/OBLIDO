
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Podcast {
  id: string;
  title: string;
  description: string;
  image: string;
  spotifyLink: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}


import React from 'react';
import { Project, Service, Testimonial, Podcast } from './types';
import { Code, Palette, Zap, Globe, Cpu, Smartphone, ShoppingBag } from 'lucide-react';

export const FREELANCER_DATA = {
  name: "Peter Jason Oblido",
  title: "Full-Stack Developer & UI Specialist",
  bio: "I craft clean, functional, and visually refined digital products. By bridging robust back-end logic with intuitive front-end interfaces, I build seamless user experiences that are technically solid and aesthetically clear.",
  email: "peterjasonoblido@gmail.com",
  skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Next.js", "Stripe API"],
  location: "General Santos City, Philippines",
  stripeLink: "https://buy.stripe.com/test_bJe3cw0C24EbbqVe7b9AA00",
  photo: "https://lh3.googleusercontent.com/d/1bHinyWFSL_rDjyydMmSDuLKFIr9R4zLc" 
};

export const ACADEMIC_BACKGROUND = [
  {
    institution: "Mindanao State University – General Santos City",
    degree: "Bachelor of Science in Agribusiness Management",
    status: "Ongoing",
    year: "Current"
  },
  {
    institution: "Mindanao State University – General Santos City",
    degree: "Diploma in Fish Processing",
    status: "Completed",
    year: "2024"
  },
  {
    institution: "University of the Philippines Open University",
    degree: "Online Course Certificate Holder",
    status: "Completed",
    year: "2025"
  }
];

export const CERTIFICATIONS = [
  { title: "Social Entrepreneurship", provider: "University of the Philippines", year: "2025" },
  { title: "Developing Awareness on Halal Principles and Practices", provider: "E-TESDA", year: "2025" },
  { title: "Managing Your Personal Finances", provider: "E-TESDA", year: "2025" },
  { title: "Budgeting and Saving", provider: "E-TESDA", year: "2025" }
];

export const LEADERSHIP = [
  { role: "Founder", organization: "Agribusiness Podcast", description: "Spearheading digital discourse on agricultural business trends." },
  { role: "Volunteer", organization: "MSU’AN PARA SA KALIKASAN – Lake Sebu", description: "Environmental advocacy and community support (2022)." }
];

export const PROJECTS: Project[] = [
  {
    id: 'flagship',
    title: 'Out Beyond Limits',
    category: 'Full-Stack E-commerce',
    description: 'A flagship lifestyle platform featuring a custom-built shop experience, seamless cart management, and a focus on minimalist aesthetic for modern brands. This project showcases high-performance filtering and secure payment integration.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200&h=800',
    tags: ['React', 'Node.js', 'Stripe', 'E-commerce'],
    link: 'https://outbeyondlimits.netlify.app/#/shop'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Full-Stack Development',
    description: 'End-to-end applications built with scalability and clean architecture at the core.',
    icon: 'Code'
  },
  {
    id: 's2',
    title: 'E-commerce Solutions',
    description: 'Tailored shopping experiences with seamless payment gateway integrations.',
    icon: 'ShoppingBag'
  },
  {
    id: 's3',
    title: 'UI/UX Engineering',
    description: 'Focusing on micro-interactions and performance to ensure a premium user feel.',
    icon: 'Palette'
  }
];

export const PODCASTS: Podcast[] = [
  {
    id: 'p1',
    title: 'Agribusiness Podcast',
    category: 'Agriculture & Tech',
    description: 'Exploring the intersection of modern technology and traditional agribusiness sectors in the Philippines.',
    image: 'https://images.unsplash.com/photo-1495433331362-d44aa5517bc6?auto=format&fit=crop&q=80&w=1200',
    spotifyLink: 'https://open.spotify.com/show/5wro83fmB0nemEw3CvGgHH'
  },
  {
    id: 'p2',
    title: 'UNSTOPPABLE PODCAST',
    category: 'Self Improvement',
    description: 'Empowering you to break barriers, cultivate a growth mindset, and unlock your ultimate potential through actionable self-improvement strategies.',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1200',
    spotifyLink: 'https://open.spotify.com/show/3SQVX9OjJ6WzZVYXrYzChA'
  }
];

export const TESTIMONIALS: Testimonial[] = [];

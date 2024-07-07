import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaChalkboardTeacher, FaReact, FaUniversity } from 'react-icons/fa';
import { LuGraduationCap, LuSchool } from 'react-icons/lu';
import ruhunasports from '@/public/ruhunasports.png';
import usham from '@/public/usham.png';
import healthy from '@/public/healthy.png';
import portfolio from '@/public/portfolio.png';
import srs from '@/public/srs.png';
import insurgex from '@/public/insurgex.png';
import aces from '@/public/aces.jpeg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Achievements',
    hash: '#achievements',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Certificates',
    hash: '#certificates',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Computer Engineering Undergraduate',
    location: 'Galle, Sri Lanka',
    description:
      'I am currently a third-year undergraduate student pursuing studies in the computer engineering',
    icon: React.createElement(FaUniversity),
    date: '2021 - 2025',
  },
  {
    title: 'Student',
    location: 'Kalmunai, Sri Lanka',
    description: 'I Studied My Advance Level at KM/KM/ Zahira College.',
    icon: React.createElement(LuSchool),
    date: ' 2019',
  },
] as const;

export const projectsData = [
  {
    title: 'RuhunaSports',
    description:
      'This is a two semester project, during which I tackled all the challenges\
      involved in creating a sports website for the faculty. Key features include integration\
       with Gmail for faculty members and live streaming of faculty sports events.',
    tags: [
      'React JS',
      'Node JS',
      'Tailwind CSS',
      'Mongo DB',
      'Express JS',
      'Framer Motion',
    ],
    imageUrl: ruhunasports,
    Url: 'https://github.com/Arshad-Codes/Sports-Project.git',
  },
  {
    title: 'Personal HealthCareApp',
    description:
      'This project involves mobile development using Flutter,\
       where the Google Palm 2 Generative AI technology is incorporated to elevate the user experience.',
    tags: ['Flutter', 'django', 'MongoDb', 'Machine Learning'],
    imageUrl: healthy,
    Url: 'https://github.com/infas01/healthy-medical_app/tree/infas_nm',
  },
  {
    title: 'USHAM',
    description:
      'This is a 4th semester project, during which I tackled all the challenges\
      involved in creating a e-commerce website. An individual project built using the MERN stack,\
       emphasizing CRUD operations. This website facilitates buying and selling with features\
        for creating, reading, updating and deleting product listings.',
    tags: ['React JS', 'Node JS', 'Tailwind CSS', 'Mongo DB', 'Express JS'],
    imageUrl: usham,
    Url: 'https://github.com/infas01/Online_Furniture_and_Appliances_Purchasing_System.git',
  },
  {
    title: 'Portfolio Website',
    description:
      'explore my portfolio showcasing my work as a computer engineering undergraduate.\
       It emphasizes my dedication to crafting impactful digital experiences.',
    tags: ['Next.js', 'React', 'Framer motion', 'TypeScript', 'Deploy'],
    imageUrl: portfolio,
    Url: 'https://infas-nm.netlify.app',
  },
  {
    title: 'Student Registration System',
    description:
      'Developed Student Registration System using C#, XAML, WPF, MVVM, and SQLite,\
     facilitating efficient student management in the faculty with automated features.',
    tags: ['WPF', 'C#', 'Sqlite', 'MaterialUI'],
    imageUrl: srs,
    Url: 'https://github.com/infas01/Student_Registration_System.git',
  },
] as const;

export const AchievementData = [
  {
    title: 'INSURGEX 1.0 Coding Competition ',
    description:
      'This is a coding competition organized by the Faculty of Computer Science,\
     University of Ruhuna. Over 100 teams participated and we achieved the 17th place among them.',
    tags: ['Algorithm', 'Data Structures', 'Coding'],
    imageUrl: insurgex,
    Url: '',
  },
  {
    title: 'ACES Coders v.10.0 Coding Competition ',
    description:
      'This is a coding competition organized by the Faculty of Computer Engineering,\
     University of Peradeniya. Over 200 teams participated and we achieved the 36th place among them.',
    tags: ['Algorithm', 'Data Structures', 'Coding'],
    imageUrl: aces,
    Url: '',
  },
] as const;

export const skillsData = [
  'JavaScript',
  'React js',
  'Node.js',
  'MongoDB',
  'Express js',
  'Python',
  'C++',
  'HTML',
  'CSS',
  'Flutter',
  'Java',
  'Git',
  'Tailwind CSS',
  'SciKit-Learn',
  'NumPy',
  'Postman',
  'Jira',
  'Agile',
  'React Redux',
  'Redux Toolkit',
  'Next.js',
  'TypeScript',
] as const;

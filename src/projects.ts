import {
  cardeal,
  cardealXL,
  clock,
  clockXL,
  gpu,
  gpuXL,
  rmp,
  rmpXL,
  room,
  roomXL,
  tastyspore,
  tastysporeXL,
  tileset,
  tilesetXL,
  town,
} from './images';
import {PageProject} from './types';

export const projects: PageProject[] = [
  {
    category: 'current',
    date: 'Jan 2022',
    path: 'tastyspore',
    title: 'Tastyspore',
    subtitle: 'Grow gourmet mushrooms with ease and confidence at home!',
    description:
      'This simple eCommerce site was made using React and Gatsby with Illustrator for the images. At the moment it is still under construction.',
    langs: ['Typescript', 'React', 'Gatsby', 'Illustrator'],
    image: {
      large: tastysporeXL,
      small: tastyspore,
    },
    live: 'https://tastyspore.com/',
    source: 'https://github.com/trevsm/tastyspore',
  },
  {
    category: 'current',
    date: 'June 2021',
    path: 'my-room',
    title: 'My Room',
    subtitle:
      'Digital 3D & Artistic Experience of what my room might look like based on my experience/skills.',
    description:
      "This is a personal project I made to learn how to use 3D and how to create an artistic experience. It's a 3D model of my hypothetical room with interactive items. I used blender to make the models and React Three Fiber to integrate the models into React.",
    langs: ['Typescript', 'React', 'Three.js', 'Blender'],
    image: {
      large: roomXL,
      small: room,
    },
    live: 'https://trevsm.github.io/3D-Portfolio/',
    source: 'https://github.com/trevsm/3D-Portfolio',
  },
  {
    category: 'current',
    date: 'April 2022',
    path: 'practice-town',
    title: 'Practice Town',
    subtitle:
      'A game-style practice app for music teachers to help their students have a more enjoyable time practicing.',
    description:
      "This is a game-style practice app for music teachers to help their students have a more enjoyable time practicing. It's a React app with a Node backend. I used Typescript, React Hooks, React Router, and Node Express to create the app. Still a work in progress.",
    langs: ['Typescript', 'React', 'Node', 'Express'],
    image: {
      large: town,
      small: town,
    },
  },
  {
    category: 'other',
    date: 'April 2022',
    path: 'tileset',
    title: 'Tileset Map Painter',
    subtitle: 'A simple tool to paint a tileset map.',
    description:
      'This tool was created to help with the creation of the maps for Practice Town. It was made using React, TypeScript, and Canvas',
    langs: ['React', 'TypeScript', 'Canvas'],
    image: {
      large: tilesetXL,
      small: tileset,
    },
    live: 'https://trevsm.github.io/tileset-map-painter/',
    source: 'https://github.com/trevsm/tileset-map-painter',
  },
  {
    category: 'other',
    date: 'Dec 2021',
    path: 'clock',
    title: 'Clock',
    subtitle: 'A simple 24-hour digital clock.',
    description:
      'This clock is an exact re-creation of a wallpaper engine clock I saw on reddit. It was made using React.',
    langs: ['React'],
    image: {
      large: clockXL,
      small: clock,
    },
    live: 'https://trevsm.github.io/os-modern-clock/',
    source: 'https://github.com/trevsm/os-modern-clock',
  },
  {
    category: 'other',
    date: 'Sep 2020',
    path: 'gpu',
    title: 'WhatGpu?!',
    subtitle: 'So what Gpu am I using?',
    description:
      'This is a simple React app that displays the user`s current GPU along with a little spinning GPU chip.',
    langs: ['React', 'Blender'],
    image: {
      large: gpuXL,
      small: gpu,
    },
    live: 'https://whatgpu.net/',
  },
  {
    category: 'other',
    date: 'Jul 2022',
    path: 'cardeal',
    title: 'Cardeal',
    subtitle: 'Buy and sell used cars online!',
    description:
      'This is a demo eCommerce site that was made for an assignment in WEB2890. It was made using Html and CSS.',
    langs: ['Html', 'Css'],
    image: {
      large: cardealXL,
      small: cardeal,
    },
    live: 'https://quiet-sundae-1f4c5c.netlify.app/',
  },
  {
    category: 'other',
    date: 'Jan 2022',
    path: 'rate-my-professor',
    title: 'Rate My Professor Advanced',
    subtitle: 'See multiple professors and their ratings!',
    description:
      'This app was made out of frustration with the Rate My Professor website having to open multiple tabs and switch between them to see all my professor options at once. It was made using React and Node.',
    langs: ['React', 'Node'],
    image: {
      large: rmpXL,
      small: rmp,
    },
    source: 'https://github.com/trevsm/rmp-scraper',
  },
];
